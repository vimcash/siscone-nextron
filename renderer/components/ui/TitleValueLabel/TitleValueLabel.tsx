export const TitleValueLabel = ({value, title, className, fontSize=6}) => (
  <div className={className}>
    <label className={`d-block fs-${fontSize + 1}`}>{title}</label>
    <label className={`h${fontSize} ps-1`} style={{color: "var(--bsp-btn-font-color)"}}>{value}</label>
  </div>
)

