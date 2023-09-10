import Projects from "components/Projects";
import "./App.css";
import ItemList from "components/ItemList";

const navbar = [
  { name: "GitHub", url: "https://github.com/vehbiu" },
  { name: "Twitter", url: "https://twitter.com/vuenha" },
  { name: "Website", url: "https://vehbiu.com" },
];


// const frameworks = [


function App() {
  return (
    <div className="mt-10 mx-auto container">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify gap-2">
          <h1 className="text-xl font-bold tracking-tight">@vehbiu</h1>

          {/* navigation */}
          <div className="flex flex-row justify-between items-center gap-2">
            {navbar.map((item, i) => (
              <a
                key={i}
                className="text-gray-500 hover:text-white transition-colors duration-150 hover:underline"
                href={item.url}
                rel="noopener noreferrer" // https://web.dev/external-anchors-use-rel-noopener/
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>
        <img
          className="rounded-full"
          height={64}
          width={64}
          src="https://avatars.githubusercontent.com/u/126095007?v=4"
          alt="my github avatar"
        />
      </div>

      <hr className="my-4 border-gray-700" />

      <h2 className="mb-2 text-3xl font-bold tracking-tight">
        👋 Hey, I'm <span className="text-blue-400">@</span>
        <a href="https://github.com/vehbiu/" className="underline" target="_blank" rel="noopener noreferrer">vehbiu</a>.
      </h2>
      <div className="flex flex-col gap-3">
        <p className="text-gray-300 font-semibold">
          I'm a fully self-taught developer and a high-school student living near Chicago. I'm know a wide variety of languages and am constantly interested in learning.
        </p>
        <p className="text-gray-300">
          I am most familiar with Python, Java, and JavaScript. I am currently learning Rust and Go. I am interested in learning many langauges slowly and thoroughly.
        </p>

        <div className="flex flex-row justify-between items-center gap-2 flex-wrap">
          {/* Languages */}
          <ItemList title="📕Languages" items={[
            { name: "Python", url: "https://python.org" },
            { name: "Java", url: "https://java.com" },
            { name: "JavaScript", url: "https://javascript.com" },
            { name: "Node.js", url: "https://nodejs.org" },
            { name: "TypeScript", url: "https://typescriptlang.org" },
            { name: "Lua", url: "https://lua.org" },
            { name: "MySQL", url: "https://mysql.com" },
            { name: "SQLite", url: "https://sqlite.org" },
            { name: "Selenium", url: "https://selenium.dev" },
            { name: "vLang", url: "https://vlang.io" }
          ]} />

          {/* Web Development */}
          <ItemList title="🌐Web Development" items={[
            { name: "HTML", url: "https://html.com" },
            { name: "CSS", url: "https://css.com" },
            { name: "JavaScript", url: "https://javascript.com" },
            { name: "React", url: "https://reactjs.org" },
            { name: "Bootstrap", url: "https://getbootstrap.com" },
            { name: "jQuery", url: "https://jquery.com" },
            { name: "Next.js", url: "https://nextjs.org" },
            { name: "TailwindCSS", url: "https://tailwindcss.com" },
            { name: "PHP", url: "https://php.net" },
            { name: "Express.js", url: "https://expressjs.com" },
            { name: "Flask", url: "https://flask.palletsprojects.com" },
            { name: "Django", url: "https://djangoproject.com" },
            { name: "FastAPI", url: "https://fastapi.tiangolo.com" },
            { name: "Bulma", url: "https://bulma.io" },
            { name: "Materialize", url: "https://materializecss.com" },
            { name: "Svelte", url: "https://svelte.dev" },
            { name: "SweetAlert", url: "https://sweetalert.js.org" },
          ]} />

          {/* Deployment and Hosting */}
          <ItemList title="🚀Deployment and Hosting" items={[
            { name: "Heroku", url: "https://heroku.com" },
            { name: "Google Cloud Platform", url: "https://cloud.google.com" },
            { name: "Vercel", url: "https://vercel.com" },
            { name: "Raspberry Pi", url: "https://raspberrypi.org" },
            { name: "Cloudflare", url: "https://cloudflare.com" },
            { name: "Sentry", url: "https://sentry.io" },
            { name: "Cloudflare", url: "https://cloudflare.com" },
            { name: "Sentry", url: "https://sentry.io" },
            { name: "NGINX", url: "https://nginx.org" },
            { name: "Docker", url: "https://docker.com" },
            { name: "ngrok", url: "https://ngrok.com" },
            { name: "raspberrypi", url: "https://raspberrypi.org" },
          ]} />

          {/* Databases */}
          <ItemList title="🗄️Databases" items={[
            { name: "MongoDB", url: "https://mongodb.com" },
            { name: "Firebase", url: "https://firebase.google.com" },
            { name: "Redis", url: "https://redis.io" },
            { name: "PostgreSQL", url: "https://postgresql.org" },
            { name: "Prisma", url: "https://prisma.io" },
          ]} />

          {/* Text Editors */}
          <ItemList title="📝Text Editors" items={[
            { name: "VSCode", url: "https://code.visualstudio.com" },
            { name: "Visual Studio", url: "https://visualstudio.microsoft.com" },
            { name: "Eclipse", url: "https://eclipse.org" },
            { name: "IntelliJ", url: "https://jetbrains.com/idea" },
          ]} />

          {/* Version Control */}
          <ItemList title="📦Version Control" items={[
            { name: "Git", url: "https://git-scm.com" },
            { name: "GitHub", url: "https://github.com" },
            { name: "GitLab", url: "https://gitlab.com" },
            { name: "BitBucket", url: "https://bitbucket.org" },
            { name: "GitKraken", url: "https://gitkraken.com" },
          ]} />

          {/* Operating Systems */}
          <ItemList title="💻Operating Systems" items={[
            { name: "Windows", url: "https://microsoft.com/windows" },
            { name: "Linux", url: "https://linux.org" },
            { name: "Fedora", url: "https://getfedora.org" },
            { name: "Ubuntu", url: "https://ubuntu.com" },
            { name: "macOS", url: "https://apple.com/macos" },
          ]} />

          {/* Other */}
          <ItemList title="📦Other" items={[
            { name: "Discord", url: "https://discord.com" },
            { name: "Figma", url: "https://figma.com" },

            { name: "Discord.js", url: "https://discord.js.org" },
            { name: "Discord.py", url: "https://discordpy.readthedocs.io" },

            { name: "Electron", url: "https://electronjs.org" },
            { name: "Electron Forge", url: "https://electronforge.io" },

            { name: "Prettier", url: "https://prettier.io" },
            { name: "ESLint", url: "https://eslint.org" },

            { name: "npm", url: "https://npmjs.com" },
            { name: "yarn", url: "https://yarnpkg.com" },
            { name: "pip", url: "https://pypi.org/project/pip" },
          ]} />

          {/* Projects */}
          <Projects projects={[
            {
              title: "vehbiu.com",
              description: "My personal website, built with Next.js and TailwindCSS.",
              url: "https://vehbiu.com",
              gh: "https://github.com/vehbiu/vehbiu.com"
            }, {
              title: "Food Tracker",
              description: "A very simple website to keep tracke of food recipes.",
              gh: "https://github.com/vehbiu/food-tracker-project"
            }
          ]} />
        </div>

      </div>
    </div>
  );
}

export default App;
