import { useState, useEffect } from "react";
import Link from "next/link";

import IconButton from "@mui/joy/IconButton";
import { useParams } from "next/navigation";

export default function MonthlyDiary() {
  const params = useParams();
  const [monthlyDiaryLink, setMonthlyDiaryLink] = useState("");

  useEffect(() => {
    if (params.date) {
      // URL에서 받은 날짜 파싱
      const [year, month] = (params.date as string).split("-");

      // 해당 월의 일기 페이지 링크 설정
      setMonthlyDiaryLink(`/diary/${year}-${month}`);
    }
  }, [params]);

  return (
    <Link href={monthlyDiaryLink}>
      <IconButton
        variant="solid"
        className="fixed bottom-28 flex rounded-full bg-default-300 p-4 shadow-lg hover:bg-default-400"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 0C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5V15.5C0 16.6935 0.474106 17.8381 1.31802 18.682C2.16193 19.5259 3.30653 20 4.5 20H19.5C20.6935 20 21.8381 19.5259 22.682 18.682C23.5259 17.8381 24 16.6935 24 15.5V4.5C24 3.30653 23.5259 2.16193 22.682 1.31802C21.8381 0.474106 20.6935 0 19.5 0H4.5ZM6 5H13C13.2652 5 13.5196 5.10536 13.7071 5.29289C13.8946 5.48043 14 5.73478 14 6C14 6.26522 13.8946 6.51957 13.7071 6.70711C13.5196 6.89464 13.2652 7 13 7H6C5.73478 7 5.48043 6.89464 5.29289 6.70711C5.10536 6.51957 5 6.26522 5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5ZM6 9H18C18.2652 9 18.5196 9.10536 18.7071 9.29289C18.8946 9.48043 19 9.73478 19 10C19 10.2652 18.8946 10.5196 18.7071 10.7071C18.5196 10.8946 18.2652 11 18 11H6C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9ZM5 14C5 13.7348 5.10536 13.4804 5.29289 13.2929C5.48043 13.1054 5.73478 13 6 13H14C14.2652 13 14.5196 13.1054 14.7071 13.2929C14.8946 13.4804 15 13.7348 15 14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H6C5.73478 15 5.48043 14.8946 5.29289 14.7071C5.10536 14.5196 5 14.2652 5 14ZM26 17C26 18.3261 25.4732 19.5979 24.5355 20.5355C23.5979 21.4732 22.3261 22 21 22H5.101C6.40809 23.284 8.16776 24.0024 10 24H21C22.8565 24 24.637 23.2625 25.9497 21.9497C27.2625 20.637 28 18.8565 28 17V10C28.0025 8.16774 27.2841 6.40803 26 5.101V17Z"
            fill="black"
          />
        </svg>
      </IconButton>
    </Link>
  );
}
