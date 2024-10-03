# Personal Portfolio Website

![NextJs](https://img.shields.io/badge/Next-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

A modern, animated portfolio website built with React, TypeScript, and TailwindCSS. This project showcases my skills, projects, and professional journey as a developer.

## 🌟 Features

- **Responsive Design**: Looks great on all devices
- **Smooth Animations**: Powered by Framer Motion
- **Interactive UI**: Dynamic elements that respond to user actions
- **Type-Safe**: Built with TypeScript for robust code
- **Modern Styling**: Utilizes TailwindCSS for a clean, modern look

## 🚀 Demo

Visit the live website at [vehbi.me](https://vehbi.me)

![Website Preview](https://github.com/vehbiu/website/blob/master/.readme/preview.png)

## 🛠️ Technologies Used

- React (via NextJS)
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide Icons

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/vehbiu/website.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── item-list.tsx    # Reusable component for listing skills
│   └── project-list.tsx # Component for displaying projects
├── App.tsx              # Main application component
└── ...
```

## 🎨 Customization

### Adding New Projects

To add a new project, modify the `projects` array in `page/app.tsx`:

```typescript
const newProject = {
  title: "Project Name",
  description: "Project description goes here",
  url: "https://project-url.com",
  gh: "https://github.com/username/project"
};
```

### Updating Skills / Tech Stack

Modify the `techStack` array in the `page/app.tsx`:

```typescript
const newSkill = {
  name: "Skill Name",
  url: "https://skill-documentation-url.com"
};
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/vehbiu/website/issues).

## 👤 Author

**Vehbi**

- Website: [vehbi.me](https://vehbi.me)
- GitHub: [@vehbiu](https://github.com/vehbiu)

## 🙏 Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Animation library: [Framer Motion](https://www.framer.com/motion/)

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/vehbiu/website?style=social)
![GitHub forks](https://img.shields.io/github/forks/vehbiu/website?style=social)

---

Made with ❤️ by [@vehbiu](https://github.com/vehbiu)