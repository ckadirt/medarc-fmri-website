# MedArc Neuroimaging Website

This is the website for the MedArc Neuroimaging project. It is built using three.js, react, and webpack.

## Deployment

Deploy with a few clicks using [Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fckadirt%2Fmedarc-fmri-website&project-name=medarc-fmri-website&repository-name=medarc-fmri-website)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?https://github.com/ckadirt/medarc-fmri-website=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

or deploy with the following commands:

```bash
git clone https://github.com/ckadirt/medarc-fmri-website.git
cd medarc-fmri-website
npm install
npm run build
```

This will create a `dist` folder with the website. You can then copy the contents of this folder to the server.

## Development

To run the website locally, run the following commands:

```bash
git clone
cd medarc-fmri-website
npm install
npm run dev
```

This will start a local server at `localhost:8080` where you can view the website.

## Adding new team members


This guide outlines how to add new members, including their black and white pictures, to your team page on a React-based website. We'll cover how to update the `teamMembersData` and `collaboratorsData` arrays and how to add pictures to the `static/team-pictures` folder.


### Adding Pictures to the Project
Before updating the code, you need to add the member's picture to the project:

1. **Prepare the Picture**: Ensure the picture is in black and white and in a web-friendly format (e.g., .jpg, .png), high contranst and low brightness in the background is recommended.

2. **Place the Picture in the Folder**: Save the picture in the `static/team-pictures` folder in your project directory. Note the file name as it will be used in the code.

### Updating Member Details in the Code
Once the picture is in place, update the member's details in the code:

#### Adding Current Team Members
1. **Update `teamMembersData` Array**: This array holds objects for each team member in the `src/contents/contentteam.js` file. Open this file and locate the `teamMembersData` array.

2. **Add a New Object**: Create an object with the member's details in the following format:

    ```javascript
    {
        name: "Member's Name",
        role: "Member's Role",
        website: "Member's Website URL",
        picture: "team-pictures/filename.ext" // replace filename.ext with the actual file name
    }
    ```

#### Adding Collaborators
Follow the same steps for collaborators, updating the `collaboratorsData` array.

#### Adding Past Team Members
For past team members who don't require a picture or additional details:

Update the PastTeamMembers Component: This component uses a simple list to display past members.

Add Member's Name: Insert the name of the past team member as a new <li> element within the <ul> in the PastTeamMembers component.

### Notes
- Ensure the picture path matches the file's location in the `static/team-pictures` folder.
- Test the changes locally to ensure that the images and member details are displayed correctly on the website.
- After verifying the changes, commit and push them to the repository to update the live website.

## Updating News Content

This README guide details how to update news links in the `ContentNews` component of your React-based website. The process involves modifying the `newsData` array within the `ContentNews` component. Here's how to add or update news links and related information.



### 1. Locate the `newsData` Array
- Open the `contentnews.js` file in the `src/contents` folder.
- Find the `newsData` array. It contains objects representing each news item.

### 2. Prepare News Item Information
- Gather the necessary information for each news item: date, title, and the link to the news article.

### 3. Update or Add News Items
- To **update** an existing item, locate the corresponding object in the `newsData` array and modify its properties (`date`, `title`, `link`) as needed.
- To **add** a new item, create an object in the following format and add it to the `newsData` array:

  ```javascript
  {
      date: 'Date of the News Item',
      title: 'Title of the News Item',
      link: 'URL Link to the News Item'
  }
  ```


### Notes
- Ensure that the URLs are correct and accessible.
- Keep the date format consistent with existing entries.
- Remember to check for any spelling or grammatical errors in the news titles.





## Adding new projects

## Steps to Update Project Details

### 1. Locate the `projects` Array
- Open `contentprojects.js` in the `src/contents` folder.
- Find the `projects` array. It contains objects, each representing a project.

### 2. Prepare Project Information
- Gather the necessary details for each project: title, subtitle, description, link, buttonText, modelPath, and threeDstuff (including details and cameraPosition).
ModelPath is the path to the 3D model, and threeDstuff is an object containing details key (numeric value lower is more detailed) and cameraPosition key (array of x, y, z coordinates).
- Prepare the 3D model (.obj) and place it in the `static/models` folder in your project directory. Note the file name as it will be used in the code.

### 3. Update or Add Projects
- To **update** an existing project, locate the corresponding object in the `projects` array and modify its properties as needed.
- To **add** a new project, create an object in the following format and add it to the `projects` array:

  ```javascript
  {
      title: "Project Title",
      subtitle: "Project Status",
      description: "Project Description",
      link: "URL Link to the Project",
      buttonText: "Button Text",
      modelPath: "Path to the 3D Model",
      threeDstuff: {
          details: NumericValue,
          cameraPosition: [x, y, z],
      }
  }
  ```

### Notes
- Ensure that the 3D model has about 1500-2000 vertices for optimal performance, those vertices should be well distributed across the model. Don't increase the details value too much, as it will propagate the lines slowly.
- Keep the format and style consistent with existing entries.
- Review each project's description for clarity and accuracy.

