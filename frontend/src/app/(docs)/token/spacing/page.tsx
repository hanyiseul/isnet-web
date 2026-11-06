import GuideBox from '@/shared/components/guideBox/GuideBox'
import Title from '@/shared/components/Title/Title'
import "./spacing.css"

type SpacingItem = {
  width: number
  desc: string
}

const spacingList: SpacingItem[] = [
  { width: 4, desc: "아이콘 간격" },
  { width: 8, desc: "칩, 썸네일 간격" },
  { width: 16, desc: "카드 그리드, 폼 필드" },
  { width: 24, desc: "행 내부 열 간격" },
  { width: 64, desc: "블록 간격" },
  { width: 112, desc: "섹션 간격" },
]

const page = () => {
  return (
    <div className="content">
      <Title
        title="Spacing"
        desc="기본 4px 스케일(0.25rem 단위)을 씁니다. 자주 쓰는 단계와 쓰임입니다."
      />

      <GuideBox title="스케일">
        <ul className="typeList">
          {spacingList.map((spacing) => (
            <li className="typeItem" key={spacing.width}>
              <span className="typeTitle">{spacing.width}px</span>
              <div className="typeDesc spacingBarWrap">
                <div className="spacingBar" style={{ width: spacing.width * 3 }} />
              </div>
              <span className="typeInfo">{spacing.desc}</span>
            </li>
          ))}
        </ul>
      </GuideBox>
    </div>
  )
}

export default page