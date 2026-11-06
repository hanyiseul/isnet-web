import GuideBox from '@/shared/components/guideBox/GuideBox'
import Title from '@/shared/components/Title/Title'
import "./typography.css"

type TypeItem = {
  title: string;
  titleDesc?: string;
  desc: string;
  info: string;
  style?: string;
}
const typeList: TypeItem[] = [
  {
    title: "h1",
    titleDesc: "page",
    info: "32-44 / 600 / -0.03em",
    desc: "공지사항",
    style: "text4xl fontSemibold leadingSm vtrackingTight"
  },
  {
    title: "h2",
    titleDesc: "section",
    info: "24-32 / 600 / -0.025em",
    desc: "포럼이 하는 일",
    style: "text3xl fontSemibold leadingSm vtrackingTight"
  },
  {
    title: "h3",
    titleDesc: "block",
    info: "20 / 600 / -0.02em",
    desc: "2027년 1분기 정기 모임",
    style: "textXl fontSemibold leadingLg vtrackingTight"
  },
  {
    title: "body",
    info: "15-16 / 1.8 / 400",
    desc: "원우 상호 간의 커뮤니티를 형성하고, 정보 교류와 기술·경영 협력을 통하여 회원의 사업 성장과 확장에 기여합니다.",
    style: "textBase leadingLg textGray700"
  },
  {
    title: "meta",
    info: "12-13 / 400",
    desc: "작성 · 운영진  2026.11.03",
    style: "textSm leadingMd textGray600"
  },
  {
    title: "eyebrow",
    info: "Mono 12 / 0.14em",
    desc: "02 — PROGRAMS",
    style: "textXs leadingMd textGray600"
  },
]

const page = () => {
  return (
    <div className="content">
      <Title
        title="Typography"
        desc="본문과 제목은 Pretendard Variable, html 기준 크기는 16px 입니다. "
      />

      <GuideBox title="서체">
        <div className="typographyBox">
          <div className="typographyTitle">가나다 Aa</div>
          <div className="typographyDesc">Pretendard Variable</div>
          <span className="typographyInfo">font-sans · font-display · 45–920</span>
        </div>
      </GuideBox>

      <GuideBox title="타입 스케일">
        <ul className="typeList">
          {typeList.map((type) => (
            <li className="typeItem" key={type.title}>
              <div className="typeTitle">
                <p className="titleComponent">{type.title}</p>
                <span className="titleDesc">{type.titleDesc}</span>
              </div>
              <div className={`typeDesc ${type.style}`}>{type.desc}</div>
              <span className="typeInfo">{type.info}</span>
            </li>
          ))}
        </ul>
      </GuideBox> 
    </div>
  )
}

export default page