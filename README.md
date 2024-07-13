# Project 3 Affordable Housing Options By Austin Council District

# Background
Review Affordable Housing options within the 10 Austin council districts to answer the following questions: 1) How does affordable housing options differ via district?; 2) What are the demographics of the residents in each district and their household income?; 3) What is the average housing price per district? The purpose is to locate how the districts are equitably (if at all) dividing up their affordable housing opportunities among the districts after reviewing for racial/ethnic background, median housing pricing, and median family income. We hope to propose our findings to the Austin Council to provide more affordable options equitably and equally among their districts. 

# Data Cleaning
Both the Austin Demographic and AHI files were reduced to focus on district demographics, housing price, median household income, affordable housing properties per district, and the number of affordable housing properties that are being used. Columns were renamed for easier manipulation in SQL database (PostreSQL). AHI information was part of a developer incentive program. The demographic data included age ranges and cognitive abilities of the residents, but that information was not necessary for this particular project. 

# Ethical Considerations
In conducting this project, several ethical considerations were made to ensure responsible data use and analysis. The data used is from 2023 and includes census data and affordable housing information provided by the City of Austin. While census data is comprehensive, it may not include all qualified individuals. We ensured the data was clean and accurate by removing any excess columns and verifying the information before analysis. Personal addresses were initially included in the Affordable Housing Inventory (AHI) file. To protect individuals' privacy, these addresses were scrubbed to ensure anonymity in our final files. This step was crucial to prevent any potential misuse of sensitive information. Efforts were made to ensure that our analysis fairly represents all demographics within each district. This includes considering racial/ethnic backgrounds, median family income, and housing prices to provide a comprehensive and unbiased overview of affordable housing distribution. We maintain transparency in our methodology and processes, providing clear documentation and instructions for replicating the analysis. Our goal is to be accountable to the communities affected by our findings and to the Austin Council, to whom we will propose our recommendations for more equitable housing options.

# Software/Libraries/Tools
Leaflet, PostgreSQL, ERD, Python, VS Code, Austin API, Seaborn, Jupyter Notebook

# Instructions on how to use and interact with the project
Once downloaded, there is an interactive map and bar charts. Users can hover over items on the map to retrive the median household income in the specific district. For both bar charts, users can hover over each designated bar to review the corresponding number of affordable houses by zip code in the pink chart and the number of affordable houses by district. 

# Results & Visualizations
After running our analyses, the following results were found:
  There are more affordable housing options in districts that serve more minorities; whereas in Districts 6-10, there are less affordable housing options where there is a majority white population
  Median household income in districts 8 and 10 range between roughly $90K-$120K
  In Districts 1-4, it averages $55K-$75K for median household income

![image](https://github.com/user-attachments/assets/8884baa6-dd1e-4686-8f71-208d8bebe6cc)
![image](https://github.com/user-attachments/assets/b7c4e340-f543-4fa8-b40e-14aafe2ed80d)
![Screen Shot 2024-07-11 at 7 42 12 PM](https://github.com/user-attachments/assets/f8ea4ab8-526c-4921-bedb-6b26cc58a2ee)
![image](https://github.com/user-attachments/assets/58ee03ef-345c-4046-a010-3dfb2039aa58)
![image](https://github.com/user-attachments/assets/0de41243-f4e6-48d6-b4ac-0d09bac63858)
![image](https://github.com/user-attachments/assets/8dec88cf-355a-4416-86eb-091d2b5dc9ae)
![image](https://github.com/user-attachments/assets/f996d44c-7a31-483f-985d-66ae69c58d15)
![image](https://github.com/user-attachments/assets/19282a61-d660-409e-8b68-bbe951e9a5e7)

# Future Considerations
Revisit the Austin Incentive Program to increase options in more affluent communities to allow for affordable housing options
Evaluate existing housing policies and their effectiveness in promoting equity
   Housing trust funds by the City to include more stability for development and maintenence of affordable housing
   Density bonuses--regulatory tool that provides developers and real estate land grants in exchange for providing public benefits
Continued monitoring of established frameworks for continued affordable housing programs
   Low-Oncome Housing Tax Credits
   Rent Control & Stabilization
   New Market Tax Credits
   Inclusionary Zoning practices

# Resources
District_Starter, reduced_council_demo.csv, AHI, GitHub Visualization Webpage, ERD, Reduced_Council_Demo.csv
![image](https://github.com/user-attachments/assets/c9b81fc1-6e3b-4efb-9c08-1055c2be3097)

# Contributors
Demographic data: https://data.austintexas.gov/City-Government/2023-Austin-Council-District-Demographic-Data/puux-7swp/about_data; Affordable Housing data: https://data.austintexas.gov/Housing-and-Real-Estate/Affordable-Housing-Inventory/ifzc-3xz8/about_data; QuickDBD: https://www.quickdatabasediagrams.com/; Austin City Council Districts: [https://maps.austintexas.gov/GIS/CouncilDistrictMap/](https://www.austintexas.gov/icrc); Austin Developer Incentive Program: https://www.austintexas.gov/department/development-incentives-and-agreements; Inclusionay Zoning Practices: https://www.texastribune.org/2023/12/07/austin-zoning-single-family-housing-costs/, https://nhc.org/policy-guide/inclusionary-housing-the-basics/common-incentives-and-offsets-in-inclusionary-housing-policies/; Low-Income Housing Tax Credits: https://www.huduser.gov/portal/datasets/lihtc.html; Rent Control: https://www.kxan.com/news/texas/why-is-there-no-rent-control-in-texas/#:~:text=In%20Texas%2C%20there%20are%20currently,causes%20widespread%20and%20severe%20damage., https://www.forbes.com/sites/forbesrealestatecouncil/2021/05/28/rent-control-versus-rent-stabilization-what-it-all-means-for-landlords/



