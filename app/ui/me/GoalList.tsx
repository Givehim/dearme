import { goalDday, isImminent, isNew } from "@/util/date";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

export default function GoalList({ date, goal }: any) {
  const splitedGoalDate = goal.endDate.split("-");

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="flex gap-2">
          {isNew({ date, createdAt: goal.createdAt }) ? (
            <span className="text-2xs font-bold text-red-600">NEW</span>
          ) : null}
          {isImminent({ date, endDate: goal.endDate }) ? (
            <span className="text-2xs font-bold text-red-600">IMMINENT</span>
          ) : null}
        </div>
        <div className="font-bold">&quot;{goal.title}&quot;</div>
        <div className="text-2xs">{`목표 날짜: ${splitedGoalDate[1]}월 ${
          splitedGoalDate[2]
        }일, ${splitedGoalDate[0]} (${
          dayjs(goal.endDate).format("dddd")[0]
        })`}</div>
      </div>
      <div className="flex items-center justify-center">
        <span className="rounded-lg border-2 border-default-700 px-2 font-semibold">
          {date
            ? goalDday({ date, endDate: goal.endDate })
            : goalDday({ endDate: goal.endDate })}
        </span>
      </div>
    </div>
  );
}
