import { differenceInHours, format, formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export const formatDate = (dateString: string | Date): string => {
  const date = new Date(dateString);
  const now = new Date();
  const hoursDifference = differenceInHours(now, date);
  if (hoursDifference < 48) {
    return `${formatDistanceToNow(date || new Date(), {
      locale: id,
    })} yang lalu`;
  } else if (hoursDifference >= 48) {
    return format(date, "d MMMM yyyy", {
      locale: id,
    });
  } else {
    return "tidak ada tanggal";
  }
};
