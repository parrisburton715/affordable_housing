-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/HOnrZh
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "austin_demographics" (
    "District" INTEGER   NOT NULL,
    "Total_Households" INTEGER   NOT NULL,
    "HH_Income_Less_than_10000" FLOAT   NOT NULL,
    "HH_Income_10000_to_14999" FLOAT   NOT NULL,
    "HH_Income_15000_to_24999" FLOAT   NOT NULL,
    "HH_Income_25000_to_34999" FLOAT   NOT NULL,
    "HH_Income_35000_to_49999" FLOAT   NOT NULL,
    "HH_Income_50000_to_74999" FLOAT   NOT NULL,
    "HH_Income_75000_to_99999" FLOAT   NOT NULL,
    "HH_Income_100000_to_149999" FLOAT   NOT NULL,
    "HH_Income_150000_to_199999" FLOAT   NOT NULL,
    "HH_Income_200000_or_more" FLOAT   NOT NULL,
    "Total_AIAN" FLOAT   NOT NULL,
    "Total_Black" FLOAT   NOT NULL,
    "Total_Hispanic_Latinx" FLOAT   NOT NULL,
    "Total_NHOPI" FLOAT   NOT NULL,
    "Total_White" FLOAT   NOT NULL,
    "Total_another_race" FLOAT   NOT NULL,
    "Total_multiracial" FLOAT   NOT NULL,
    "Total_housing_units" FLOAT   NOT NULL,
    "Occupied_housing_units" FLOAT   NOT NULL,
    "Below_Poverty" FLOAT   NOT NULL,
    "Median_HH_Income" INTEGER   NOT NULL,
    "Median_Home_Sale_Price" INTEGER   NOT NULL,
    "Average_Closing_Rent" INTEGER   NOT NULL,
    CONSTRAINT "pk_austin_demographics" PRIMARY KEY (
        "District"
     )
);

CREATE TABLE "austin_affordable_housing" (
    "Contract_ID" INTEGER   NOT NULL,
    "Project_ID" INTEGER   NOT NULL,
    "Project_Name" VARCHAR(50)   NOT NULL,
    "Ownership" VARCHAR(50)   NOT NULL,
    "Developer" VARCHAR(50)   NOT NULL,
    "Address" VARCHAR(50)   NOT NULL,
    "ZIP" INTEGER   NOT NULL,
    "Parcel_ID" VARCHAR(50)   NOT NULL,
    "Council_District" INTEGER   NOT NULL,
    "Unit_Type" VARCHAR(50)   NOT NULL,
    "Housing_Tenure" VARCHAR(50)   NOT NULL,
    "Development_Status" VARCHAR(50)   NOT NULL,
    "Total_Units" INTEGER   NOT NULL,
    "Affordable_Units" INTEGER   NOT NULL,
    "Total_ADA_Units" FLOAT   NOT NULL,
    "Affordability_Start_Date" VARCHAR(50)   NOT NULL,
    "Affordability_Expiration_Date" VARCHAR(50)   NOT NULL,
    "Affordability_Period" FLOAT   NOT NULL,
    "HDA" VARCHAR(50)   NOT NULL,
    "Private_Activity_Bonds" VARCHAR(50)   NOT NULL,
    "Affordability_Unlocked" VARCHAR(50)   NOT NULL,
    "SMART" VARCHAR(50)   NOT NULL,
    "Longitude" FLOAT   NOT NULL,
    "Latitude" FLOAT   NOT NULL,
    CONSTRAINT "pk_austin_affordable_housing" PRIMARY KEY (
        "Council_District"
     )
);

ALTER TABLE "austin_demographics" ADD CONSTRAINT "fk_austin_demographics_District" FOREIGN KEY("District")
REFERENCES "austin_affordable_housing" ("Council_District");

