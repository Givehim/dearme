import { useState } from "react";

import Companions from "@/public/diary/Companions";

export default function ChooseCompanions({ onSelectCompanion }) {
  const [selectedCompanions, setSelectedCompanions] = useState([] as string[]);
  const companions = ["가족", "연인", "친구", "지인", "안만남"];

  // 각 태그를 클릭했을 때의 핸들러
  // const handleTagClick = (tag: string) => {
  //   console.log("Clicked on tag:", tag);
  //   // 여기서 태그 클릭에 대한 로직을 추가할 수 있습니다.
  // };

  const handleCompanionClick = (companion: any) => {
    setSelectedCompanions((prevCompanions) => {
      // 이미 선택된 동반자라면 제거, 아니라면 추가
      const newCompanions = prevCompanions.includes(companion)
        ? prevCompanions.filter((c) => c !== companion)
        : [...prevCompanions, companion];
      onSelectCompanion(newCompanions); // 부모 컴포넌트에 선택된 동반자들을 알림
      return newCompanions;
    });
  };

  return (
    <span className="mb-8 mt-2 flex flex-wrap gap-2 px-6">
      {companions.map((companion) => (
        <Companions
          key={companion}
          text={companion}
          selected={selectedCompanions.includes(companion)}
          onClick={() => handleCompanionClick(companion)}
        />
      ))}
    </span>
  );
}
