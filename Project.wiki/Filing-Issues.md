# Filing a bug
Users of the repository are free to file bugs and request enhancements by opening a new one in github issues and taging it as a bug or enhancement.   The team will assign a priority and put it in its backlog.  The team also drives iterations by scenarios and stories.   Stories are special issues with labels.   The size of the stories are estimated using t-shirt sizing.  Here is a description of the labels used.

# Labels and their meaning in this repository

Label name	 | Purpose / type of issue
-----------------|-------------------------
Story	| Each scenario will be broken down into stories.   A recorded story in the issues list, will reference (via #(Issue Number)) the scenario it is describing. If the story is broken down into sub stories, those sub stories will also be marked as a Story.   As the stories evolve, the issue will be edited to reflect it’s evolution.   Once the story is implemented, the story will be marked close; and the commit message for the source will reference the story number (e.g. “completed ‘showing arrow for currency trend’ ref #4”).  The story tag is combined with a “T-shirt” size and a priority based on your goals.
Size-S, Size-M, Size-L, Size-XL	| For each story, it will be tagged with a “T-shirt” size based on the difficulty the team thinks it will take to estimate.
High, Medium, Low | Categories corresponding to the priority of the story or bug. 
Enhancement	A work item that supports a story; something that can be implemented to support the story to make it better; but that isn’t a “bug”.   When the enhancement is implemented, the commit message to the server indicates the issue; and the enhancement indicates what branch has been closed. (there by default in GitHub)
Bug	A defect found in a particular story that needs to be fixed to mark it complete. (there by default in GitHub)
