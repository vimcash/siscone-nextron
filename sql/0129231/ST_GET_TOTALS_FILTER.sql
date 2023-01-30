create or alter procedure ST_GET_TOTALS_FILTER (
    IN_DATE_FROM date,
    IN_DATE_TO date)
returns (
    BREAKFAST_COUNT integer,
    BREAKFAST_TOTAL_PRICE float, 
    BREAKFAST_TOTAL_SUBSIDY float,  
    BREAKFAST_TOTAL float,
    LUNCH_COUNT integer,
    LUNCH_TOTAL_PRICE float,
    LUNCH_TOTAL_SUBSIDY float,
    LUNCH_TOTAL float,
    DINNER_COUNT integer,
    DINNER_TOTAL_PRICE float,
    DINNER_TOTAL_SUBSIDY float,
    DINNER_TOTAL float,
    PRICE_TOTAL float,
    SUBSIDY_TOTAL float,
    TOTAL float)
as
  declare variable CATEGORY type of column SLIDE.CATEGORY;
  declare variable QTY INTEGER;
  declare variable PRICE INTEGER;
  declare variable SUBSIDY INTEGER; 
  declare variable TOTAL_ INTEGER;
begin
  for select
    category,
    count(*) as Qty,
    sum(price) as Price,
    sum(subsidy) as Subsidy,
    sum(price)+sum(subsidy) as Total
  from slide
  where CAST(created_at AS DATE) between
    :in_date_from and :in_date_to
  group by category
    into
      :CATEGORY,
      :QTY,
      :PRICE,
      :SUBSIDY,
      :TOTAL_
  do
  begin
    IF(CATEGORY = 'DESAYUNO') THEN
      BEGIN
        BREAKFAST_COUNT = QTY;
        BREAKFAST_TOTAL_PRICE = PRICE; 
        BREAKFAST_TOTAL_SUBSIDY = SUBSIDY;
        BREAKFAST_TOTAL = TOTAL_;
      END
    IF(CATEGORY = 'ALMUERZO') THEN
      BEGIN
        LUNCH_COUNT = QTY;
        LUNCH_TOTAL_PRICE = PRICE;
        LUNCH_TOTAL_SUBSIDY = SUBSIDY;
        LUNCH_TOTAL = TOTAL_;
      END
    IF(CATEGORY = 'ALMUERZO') THEN
      BEGIN
        DINNER_COUNT = QTY;
        DINNER_TOTAL_PRICE = PRICE;
        DINNER_TOTAL_SUBSIDY = SUBSIDY;
        DINNER_TOTAL = TOTAL_;
      END
  end
  PRICE_TOTAL = DINNER_TOTAL_PRICE + LUNCH_TOTAL_PRICE + BREAKFAST_TOTAL_PRICE;
  SUBSIDY_TOTAL = DINNER_TOTAL_SUBSIDY + LUNCH_TOTAL_SUBSIDY + BREAKFAST_TOTAL_SUBSIDY;
  TOTAL = PRICE_TOTAL + SUBSIDY_TOTAL;
  suspend;
end