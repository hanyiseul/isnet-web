import GuideBox from "@/shared/components/guideBox/GuideBox"
import Title from "@/shared/components/Title/Title"
import "./color.css"

const Page = () => {

  const backgrounds = [
    {
      className: "bgPrimary",
      name: "brand-navy",
      hex: "#1E2A44",
      desc: "로고, 히어로·푸터 배경, 주 버튼, 활성 상태",
    },
    {
      className: "brandBlue",
      name: "brand-blue",
      hex: "#2A3FA0",
      desc: "포인트: 번호, 분류, 조항, N 표시, 링크 hover",
    },
  ];

  const texts = [
    {
      bg: "bgGray900",
      className: "textGray900",
      name: "gray-900",
      hex: "#151a24",
      desc: "제목, 본문 강조, 섹션 상단 굵은 라인",
    },
    {
      bg: "bgGray700",
      className: "textGray700",
      name: "gray-700",
      hex: "#3a4152",
      desc: "본문 텍스트",
    },
    {
      bg: "bgGray500",
      className: "textGray500",
      name: "gray-500",
      hex: "#9aa0ad",
      desc: "메타 정보, 날짜, 라벨, 비활성 메뉴",
    },
    {
      bg: "bgGray400",
      className: "textGray400",
      name: "gray-400",
      hex: "#b9bec8",
      desc: "비활성 텍스트 (이전/다음 글 없음)",
    },
  ]

  const onNavy = [
    {
      bg: "bgonNavy300",
      className: "textOnNavy300",
      name: "onNavy300",
      hex: "#AEB6CC",
      desc: "로고 기호, 아이브로우, 푸터 텍스트",
    },
    {
      bg: "bgonNavy200",
      className: "textOnNavy200",
      name: "onNavy200",
      hex: "#C3CAD9",
      desc: "히어로 본문",
    },
    {
      bg: "bgonNavy100",
      className: "textOnNavy100",
      name: "onNavy100",
      hex: "#D5DAE6",
      desc: "히어로 부제",
    },
    {
      bg: "bgonNavy",
      className: "textOnNavy",
      name: "onNavy",
      hex: "#fff",
      desc: "네이비 위 제목·버튼",
    },
  ]

  const surface = [
    {
      bg: "bgGray100",
      name: "surface-page",
      hex: "#f3f4f6",
      desc: "페이지 배경",
    },
    {
      bg: "bgWhite",
      name: "surface-card",
      hex: "#ffffff",
      desc: "카드, 입력, 헤더",
    },
    {
      bg: "bgGray50",
      name: "surface-sunken",
      hex: "#f7f8fa",
      desc: "업로드 영역",
    },
    {
      bg: "bgGray200",
      name: "line-200",
      hex: "#e3e5ea",
      desc: "행 구분선, 카드, 테두리",
    },
    {
      bg: "bgGray300",
      name: "line-300",
      hex: "#d5d8de",
      desc: "입력·칩 테두리",
    },
    {
      bg: "bgGray400",
      name: "line-400",
      hex: "#b9bec8",
      desc: "점선 업로드, 테두리",
    },
    {
      bg: "bgDestructive",
      name: "destructive",
      hex: "#b0352b",
      desc: "폼 오류",
    },
  ]
  return (
    <div className="content">
      <Title
        title="Color"
        desc="모든 색은 variables.css 의 CSS 변수입니다."
      />

      <GuideBox
        title="Brand"
      >
        {backgrounds.map((bg) => (
          <div className="colorBox" key={bg.className}>
            <div className={`color ${bg.className}`}></div>

            <div className="colorDesc">
              <strong>{bg.name}</strong>
              <span>.{bg.className}</span>
              <span>{bg.hex}</span>
              <span>{bg.desc}</span>
            </div>
          </div>
        ))}
      </GuideBox>

      <GuideBox
        title="Text"
      >
        {texts.map((tc) => (
          <div className="colorBox" key={tc.className}>
            <div className={`color ${tc.bg}`}></div>

            <div className="colorDesc">
              <strong>{tc.name}</strong>
              <span>.{tc.className}</span>
              <span>{tc.hex}</span>
              <span>{tc.desc}</span>
            </div>
          </div>
        ))}
      </GuideBox>

      <GuideBox
        title="On Navy"
      >
        {onNavy.map((brand, index) => (
          <div className="colorBox" key={index}>
            <div className={`color ${brand.bg}`}></div>

            <div className="colorDesc">
              <strong>{brand.name}</strong>
              <span>.{brand.className}</span>
              <span>{brand.hex}</span>
              <span>{brand.desc}</span>
            </div>
          </div>
        ))}
      </GuideBox>

      <GuideBox
        title="Surface · Line · State"
      >
        {surface.map((state) => (
          <div className="colorBox" key={state.bg}>
            <div className={`color ${state.bg}`}></div>

            <div className="colorDesc">
              <strong>{state.name}</strong>
              <span>{state.hex}</span>
              <span>{state.desc}</span>
            </div>
          </div>
        ))}
      </GuideBox>
    </div>
  )
}
export default Page