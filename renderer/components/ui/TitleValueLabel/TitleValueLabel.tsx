export const TitleValueLabel = ({value, title, className}) => (
  <div className={className}>
    <label className="w-100 fs-4">{title}</label>
    <label className="h1 ps-1" style={{color: "var(--bsp-btn-font-color)"}}>{value}</label>
  </div>
)

