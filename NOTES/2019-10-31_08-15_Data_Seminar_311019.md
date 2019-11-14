**HACKTIV8 Fox Talks vol.8**
_Session 1: Introduction to Data (18.40-19.10):_
1. Data team do's and dont's:
    DO'S:
    -Create data model in databse production
    -Data extraction
    -Create reports and analysis'
    -Create streaming data pipeline
    -Create data warehouse
    -Create machine learning/AI
    -Create survey plan to get customer data

    DONT'S:
    -Take decisions based on analysis (Decisions done by stakeholders)
    -Only does coding

Database Administrators focus on optimisation. Database Teams focus on storing the most data.

2. Data Maturity:
    -Data Aware. Manually compile non-standardized reports from different systems. (Goal: Standardized reporting)
    -Data Proficient. Standardized reporting on an organisation wide reporting platform. (Goal: Track org KPIs using BI platform)
    -Data Savvy. Use data to make critical business decisions. (Goal: Data based decisions for key initiatives)
    -Data Driven. Embed data into all business processes. (Goal: Add scale and take out cost)

Types of Data Teams:
    -Team focused on Machine Learning/AI
    -Team focused on reporting/visualization
    -Team focused on analysis
    -Superman team (All of the above combined)

Data Team Skillset:
    Back (Engineers):
    -SQL
    -Programming knowledge
    -Database knowledge
    -Distributed storage & processing knowledge
    -Data pipeline knowledge

    Front (Anaylsts):
    -SQL
    -Data visualization
    -Machine learning
    -Statistics
    -Problem solving
    -Data mining
    -Negotiation/Communication

For startup companies, usually data analysts(Front) are hired before data engineers(Back), but both need to be hired at the same time to be able to work with each other.

_Q&A 1 (19.10-19.20):_
Q: Dumb kid didnt listen the question.
A: Datawarehouses and Visualization Teams are all thats needed to function.

Q: How do you optimise extremely large queries/Cut down on processing times?
A: A presentation layer is made in the DWH and is then extracted to the Vis Team. Transformations are done        with external services. They are split into multiple nodes for individual processing. Also can be done by      either changing the process or storage method.

Q: How do you assure stakeholders that the data is good/will work?
A: This is done by the Front. The Back is only there to educate the Front about how the data works. It is the     Front's job to make reports/analysis' that will prove that the data is valid.

Q: How can the Front get the knowledge to work the Back?
A: Start with learning data pipelines and databases as these are the most important. The analyst can move to      the engineers job temporarily to learn the basics of the Back's job using ETL tools.

_Session 2: Effective Data Visualization (19.20-19.50):_
Always use the simplest method for your audience, stick to the basics. 
Less is more, minimalism and simplicity makes for a better user experience.
Output something that will cause less questions to be asked, even if it increases effort required.
Visual attractiveness and functionality need to be taken into account when choosing which type of graph to use to visualize data. Factors such as time, cost, amount of data should also be taken into account.

Line Charts: Ideal for showing changes.

Comparison Line Charts: Ideal for comparing continuous data in time.

Bar Chart (Vertical/Horizontal): Perfect for comparisons. Use Vertical Bar when you want the audience to see                                    values first, then categories and if you want the audience to be objective or                                  compare by values. Use Horizontal Bar when you want the audience to see                                        categories first, then values, or when the info is relatively subjective, or                                   when you want your audience to be subjective or compare by groups, and when                                    the groups have long names.

Cumulative Bar Chart (Stacked): To represent cumulative/multiple types of data within a single bar. However,                                   these can be confusing, easy to misinterpret and miss details.

Bar Chart (Normalized): Effective to show distribution of categories as parts of a whole, where the cumulative                         total is unimportant. Shown in proportions to each factor (Pie chart in a bar).

Area Chart (Normalized): Perfect to show trends as well as the relative percentage of multiple data series.

Area Chart: Perfect when communicating the overall trend as opposed to the individual values.

Pie Chart: Suited to show proportions of a whole.

Counter/Text: Ideal when you want to show 1-2 values.

Table: Good for audiences with different interests or when you have to show a lot of values and breakdowns.

Table (Heatmap): To help your audience quickly find a greater value or positive/negative values. Basically a                    table with lighter/darker colors coressponding to the values in the cell.

_Q&A 2 (19.50-20.00):_
Q: What tools can I use and are there any courses I can take to learn more about data visualization?
A: The tools used aren't limited, for presentations and deep analysis I prefer to use * because of better         functinality, database integration, and dashboard and queries are displayed. To learn, I recommend a book      called "Storytelling with data" by Cole Nussbaumer Knaflic. The point of data visualization is to simplify     data as much as possible, so it is important to know your data to know the best way to visualize it. Data      visualizers are more into the business side than the technical side of the task.

Q: If as an DA, you receive a task from a stakeholder, what are the steps taken before visualizing the data?
A: Problem analysis to find out what the problem is, then compile the data needed to solve the problem, then      solve the problem and find ways to simplify the solution. Finally, implement the solution.

Q: Whats the best way to deliver a solution so the audience can understand the data?
A: When you give the solution, also give a full explanation. Solutions may be trials and not just complete        solutions. A business sense will help here to be able to convince the audience that the given solution will    help improve the business.

Q: Is there a minimum amount of data to make an analysis?
A: No, because even if there is no data, you can make your own data through experiments. The data collected       from those experiments are the data that will be used in the analysis.

Q: Is there a specific amount of data required for the data to be valid?
A: No, but half the total amount is best to have.

Q: For a DA, how do you keep the data accurate, especially in large quantities?
A: This is the responsibility of the Data Engineers, but DA's need a sense of data validity before the data is    used in an analysis. A data manipulation skillset is very helpful in this situation.