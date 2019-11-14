*Git/GitHub Usage Notes*
<h1>(WHEN VIEWING IN GITHUB, ALWAYS CHOOSE "Raw" TO PREVENT ANY FORMATTING!!)</h1>
<h6>(Best viewed in Visual Studio Code)</h6>

Git is a standalone program, GitHub is just a graphical extension of Git. To use Git, Git Bash must be installed. After installation, Git can be used through the computers proprietary terminal or Git Bash's own terminal.

**STEPS TO USE GITHUB:**
<optional> Create directory with mkdir/git init
1. Clone the GitHub repository link to Git with 'git clone "RepositoryLink"'.
<optional> Create a new file with 'touch'.
2. Add the existing file(s) with 'git add . or git add "filename"'.
<optional> Create a new branch with 'checkout -b "Branch Name"'.
3. Commit the changes with 'git commit -m "MessageHere"'.
4. Check if the files were successfully added/committed with 'git status'.
5. Finalise the upload with 'git push origin "BranchName"'.
<optional> Check the activity history of the repository with 'git log'.
<optional> Sync GitHub with the PC using 'git pull origin "BranchName"'.

**DEFINITIONS:**
-_Repository:_ Containers of files on Git.
-_Branch:_ Sections of the repository, each with different permissions.

**COMMANDS:**
_rm:_ Delete file.

_rf:_ Delete folder.

_mkdir:_ Create directory.

_mv:_ Move.

_cd:_ Go to.

_touch:_ Create a file within the current directory.

_cp:_ Copy.

_cd ../:_ Go back once.

_pwd:_ Show directory location.

_ls:_ List all files/folders in the current directory.

_git log:_ Check the activity of the current Git repository.

_git status:_ Check the uncommitted changes of the current repository.

_git checkout -b <branch name>:_ To make a new branch.

_git checkout <branch name>:_ To move branches.

_git add <file name>:_ Prepares the file to be added to the current repository on GitHub.
  
  _git add .:_ Prepares to add all files from the current folder to the repository on GitHub.

_git commit -m "Message":_ To mark activity changes and add requests for the log.

_git push origin <branch name>:_ To confirm and upload the added files to the stated branch on the repository on GitHub.

_git pull origin <branch name>:_ To take files from GitHub to the PC. Mainly used to ensure the PC and the repository are up to date with each other.
