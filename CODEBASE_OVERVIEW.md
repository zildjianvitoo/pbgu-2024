# Ikhtisar Codebase

Proyek ini adalah aplikasi Next.js 14 (App Router) untuk pemilihan Bujang Gadis UNSRI dengan autentikasi berbasis NextAuth (Credentials), database Prisma (SQLite), UI Tailwind + komponen shadcn, dan data‐fetching via TanStack Query + Axios.

## Teknologi Utama

- Next.js 14 (App Router) – `app/`
- NextAuth v5 beta (Credentials + PrismaAdapter) – `auth.ts`, `app/api/auth/[...nextauth]/route.ts`
- Prisma Client (SQLite) – `lib/prisma.ts`, `schema.prisma`
- Tailwind CSS + shadcn/ui – `tailwind.config.ts`, `components/ui/*`
- TanStack Query – `provider/Providers.tsx`
- React Hook Form + Zod – validasi form auth
- Axios – `lib/axiosInstance.ts`, wrapper untuk pemanggilan API

## Struktur Direktori (ringkas)

- `app/(auth)/login/page.tsx` – Halaman Login (memakai `components/Auth/LoginForm`)
- `app/(auth)/daftar/page.tsx` – Halaman Daftar (memakai `components/Auth/RegisterForm`)
- `app/(dashboard)` – Layout dan halaman dashboard
- `app/api/*` – Route handlers (REST‐like) untuk users, activities, vouchers, leaderboards, dll
- `auth.ts` – Konfigurasi NextAuth (Credentials + PrismaAdapter)
- `next-auth.d.ts` – Augmentasi tipe Session/User (tambahan `id`, `role`)
- `provider/Providers.tsx` – Pembungkus SessionProvider + QueryClientProvider
- `lib/prisma.ts` – Inisialisasi PrismaClient
- `lib/network/*` – Wrapper pemanggilan API via Axios
- `schema.prisma` – Skema Prisma (lokasi di root repo)
- `public/` – Aset statis (logo, gambar)

## Alur Autentikasi

- Login via Credentials: `components/Auth/LoginForm.tsx` memanggil `signIn('credentials')` tanpa redirect otomatis.
- Server mengecek user dengan Prisma (`auth.ts`), membandingkan password menggunakan `bcryptjs.compare`.
- Session JWT: callback `jwt` dan `session` menambah `id` dan `role` ke token/session (didefinisikan di `next-auth.d.ts`).
- API auth di `app/api/auth/[...nextauth]/route.ts` mengekspos `GET`/`POST` dari `handlers` di `auth.ts`.

## Model Data (Prisma, ringkas)

- `User` (password hashed, role default "user") dan relasi ke berbagai entitas profil: `UserGeneralInfo`, `UserPersonalInfo`, `UserFormalEducation`, `UserInformalEducation`, `UserCompetence`, `UserOrganizationalExperience`, `UserAcheivement`.
- Konten & pemilihan: `Activities` + `ActivityImages`, `Finalist`, `Voucher`, `AppStatics`.
- Tabel NextAuth: `Account`, `Session`, `VerificationToken`.

## API Penting (contoh)

- `GET/POST app/api/users` – daftar user, registrasi (hash password, cek email unik)
- Banyak endpoint profil user: `app/api/user-*`
- Konten: `app/api/activities`, `app/api/activity-images`
- Voting/relasi: `app/api/finalist`, `app/api/vouchers`, `app/api/leaderboards/*`

## Variabel Lingkungan

Contoh di `.env.example`:

- `DATABASE_URL` – URL SQLite (contoh: `file:./dev.db`)
- `NEXT_PUBLIC_BASE_URL` – (lihat catatan di bawah)
- `NEXTAUTH_URL` – Base URL aplikasi (contoh dev: `http://localhost:3001`)
- `NEXTAUTH_SECRET` – Secret NextAuth

Catatan:

- `lib/axiosInstance.ts` menggunakan `process.env.NEXT_PUBLIC_BASE_API_URL` tetapi `.env.example` menyediakan `NEXT_PUBLIC_BASE_URL`. Samakan nama variabel (mis. ganti axios ke `NEXT_PUBLIC_BASE_URL` atau perbarui `.env.example`). Jika kosong, Axios tetap bisa memakai path relatif `"/users"` ke origin saat ini di browser.

## Menjalankan Secara Lokal

1. Install dependencies

- `npm install`

2. Konfigurasi env

- Buat `.env` mengacu `.env.example`. Contoh minimal:
  - `DATABASE_URL="file:./dev.db"`
  - `NEXTAUTH_URL="http://localhost:3001"`
  - `NEXTAUTH_SECRET` diisi string acak kuat
  - (Opsional) `NEXT_PUBLIC_BASE_API_URL` atau `NEXT_PUBLIC_BASE_URL` sesuai yang dipakai Axios

3. Migrasi Prisma (perhatikan lokasi skema di root):

- Generate client: `npx prisma generate --schema=schema.prisma`
- Migrasi: `npx prisma migrate dev --name init --schema=schema.prisma`

4. Jalankan dev server

- `npm run dev` (port 3001)
- Buka `http://localhost:3001`

## Catatan & Potensi Perbaikan

- Mismatch env var Axios: `NEXT_PUBLIC_BASE_API_URL` vs `.env.example` (`NEXT_PUBLIC_BASE_URL`).
- Routing NextAuth untuk `newUser` di `auth.ts` menunjuk ke `"/register"`, tetapi halaman daftar ada di `/(auth)/daftar` (route `/daftar`). Pertimbangkan mengganti `pages.newUser` menjadi `"/daftar"` agar konsisten.
- Lokasi `schema.prisma` berada di root, bukan default `prisma/schema.prisma`. Pastikan perintah Prisma menyertakan `--schema=schema.prisma` atau pindahkan file ke folder `prisma/` demi konvensi.
- Keamanan password: sudah hash via `bcryptjs` pada registrasi. Pastikan semua form related menangani error state dan loading dengan baik (sebagian sudah ada via `toast` dan `isSubmitting`).
- Konfigurasi ikon dan aset sudah ada di `public/`; cek referensi path (mis. logo) agar sesuai branding.
  w

## Rekomendasi Next Steps

- Samakan env var Axios dan update `.env.example` agar tidak membingungkan.
- Sesuaikan `pages.newUser` di `auth.ts` ke `"/daftar"`.
- Pertimbangkan memindahkan `schema.prisma` ke `prisma/schema.prisma` agar kompatibel dengan tooling default.
- Tambahkan skrip npm untuk Prisma (generate/migrate/seed) agar onboarding lebih mulus.
