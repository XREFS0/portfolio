# MASA InstaPilot

Instagram automation tool built with C# and Selenium WebDriver for managing accounts, extracting user data, and performing bulk actions.

![Main Interface](assets/main-interface.jpg)

## Overview

MASA InstaPilot is a Windows desktop application that automates Instagram operations through browser automation. It provides tools for bulk follow/unfollow operations, user data extraction from posts and hashtags, automated liking and commenting, and direct messaging.

## Features

- **Bulk Follow/Unfollow** -- Automate follow and unfollow operations from user lists or hashtag searches
- **User Extraction** -- Extract user lists from post likes, post comments, followers, followings, and hashtags
- **Like/Comment Automation** -- Automatically like and comment on posts filtered by user or hashtag
- **Direct Messaging** -- Send direct messages to target users
- **One-Click Operations** -- Quick follow/unfollow from imported user lists
- **Session Persistence** -- Save and restore login credentials locally

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Language | C# 7.3 |
| Framework | .NET Framework 4.8 |
| UI | Windows Forms |
| Browser Automation | Selenium WebDriver 4.27 |
| JSON Processing | Newtonsoft.Json 13.0, System.Text.Json 8.0 |
| Build System | MSBuild / Roslyn |

## Requirements

- Windows 10 or later
- .NET Framework 4.8 runtime
- Google Chrome browser
- Visual Studio 2019+ (for building from source)

## Installation

### Building from Source

1. Clone the repository:

```bash
git clone https://github.com/yourusername/MASAInstaPilot.git
cd MASAInstaPilot
```

2. Restore NuGet packages:

```bash
dotnet restore
```

3. Build the project:

```bash
dotnet build --configuration Release
```

4. The compiled executable will be at:

```
bin/Release/MASA InstaPilot.exe
```

### Runtime Dependencies

The following NuGet packages are resolved automatically during build:

| Package | Version | Purpose |
|---------|---------|---------|
| Selenium.WebDriver | 4.27.0 | Chrome browser automation |
| Newtonsoft.Json | 13.0.3 | JSON serialization |
| System.Text.Json | 8.0.5 | JSON processing |
| System.Drawing.Common | -- | Image handling |
| Microsoft.IdentityModel.* | -- | Identity model support |

## Project Structure

```
MASAInstaPilot/
|-- MASAInstaPilot.sln              Solution file
|-- MASAInstaPilot.csproj           Project configuration
|-- app.config                      Runtime configuration
|-- app.manifest                    Application manifest
|-- MASAInstaPilot.ico              Application icon
|-- LICENSE                         MIT License
|-- README.md                       Documentation
|
|-- assets/                         Static assets
|   +-- main-interface.jpg          Application screenshot
|
|-- InstagramBotDesign/             Source code
|   |-- Program.cs                  Entry point
|   |-- InstagramFollowUnfollow.cs  Main form logic
|   |-- SignInMethodes.cs           Instagram authentication
|   |-- targeting.cs                Profile targeting
|   |-- ByName.cs / ByName1.cs     Username-based following
|   |-- ByHashTag.cs / ByHashtag1.cs  Hashtag-based following
|   |-- GetFollowersFromUser.cs     Follower extraction
|   |-- Get_Followings_From_User.cs Following extraction
|   |-- GetUsersFromPost.cs         Post like extraction
|   |-- GetUsersFromPostByComments.cs  Comment extraction
|   |-- Get_Users_From_Hashtag.cs   Hashtag user extraction
|   |-- OneClickFollow_Unfollow.cs  Quick operations
|   |-- RegistrationForm.cs         Registration UI
|   |-- HelpForm.cs                 Help and contact
|   |-- RegData.cs                  Registration data model
|   |-- Properties/                 Assembly metadata
|   +-- *.resx                      Form resources
|
|-- Properties/
|   +-- AssemblyInfo.cs             Assembly information
|
|-- Microsoft/CodeAnalysis/         .NET polyfills
+-- System/Runtime/CompilerServices/ Nullable attributes
```

## Usage

1. Launch `MASA InstaPilot.exe`
2. Click **Login Instagram** to open the browser window
3. Log in to your Instagram account manually
4. Use the main interface to access automation features:
   - Extract users from posts, followers, or hashtags
   - Perform bulk follow/unfollow operations
   - Send direct messages
   - Automate likes and comments

## Configuration

Application settings are stored in the Windows User Settings system at:

```
%AppData%\MASAInstaPilot\
```

## Known Limitations

- Windows-only application (WinForms)
- Requires Google Chrome browser installed
- Instagram may detect and restrict automated activity
- Credentials are stored locally in plaintext

## Contributing

Contributions are welcome. Please open an issue first to discuss proposed changes, then submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer

This software is provided for educational purposes only. Users are solely responsible for complying with Instagram's Terms of Service. The author assumes no liability for misuse of this software.
