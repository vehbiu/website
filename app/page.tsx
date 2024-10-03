// "use client";
import Projects from "@/components/project-list";
import ItemList from "@/components/item-list";
import { Github, Globe } from 'lucide-react';
import { MotionA, MotionDiv, MotionH1, MotionH2, MotionHr, MotionImg, MotionP, MotionSpan } from '@/components/motion';

const navbar = [
  { name: "GitHub", url: "https://github.com/vehbiu", icon: Github },
  { name: "Website", url: "https://vehbi.me", icon: Globe },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

function App() {
  const techStack = {
    "📕Languages": [
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
    ],
    "🌐Web Development": [
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
      { name: "SweetAlert", url: "https://sweetalert.js.org" }
    ],
    "🚀Deployment and Hosting": [
      { name: "Heroku", url: "https://heroku.com" },
      { name: "Google Cloud Platform", url: "https://cloud.google.com" },
      { name: "Vercel", url: "https://vercel.com" },
      { name: "Raspberry Pi", url: "https://raspberrypi.org" },
      { name: "Cloudflare", url: "https://cloudflare.com" },
      { name: "Sentry", url: "https://sentry.io" },
      { name: "NGINX", url: "https://nginx.org" },
      { name: "Docker", url: "https://docker.com" },
      { name: "ngrok", url: "https://ngrok.com" }
    ],
    "🗄️Databases": [
      { name: "MongoDB", url: "https://mongodb.com" },
      { name: "Firebase", url: "https://firebase.google.com" },
      { name: "Redis", url: "https://redis.io" },
      { name: "PostgreSQL", url: "https://postgresql.org" },
      { name: "Prisma", url: "https://prisma.io" }
    ],
    "📝Text Editors": [
      { name: "VSCode", url: "https://code.visualstudio.com" },
      { name: "Visual Studio", url: "https://visualstudio.microsoft.com" },
      { name: "Eclipse", url: "https://eclipse.org" },
      { name: "IntelliJ", url: "https://jetbrains.com/idea" }
    ],
    "📦Version Control": [
      { name: "Git", url: "https://git-scm.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "GitLab", url: "https://gitlab.com" },
      { name: "BitBucket", url: "https://bitbucket.org" },
      { name: "GitKraken", url: "https://gitkraken.com" }
    ],
    "💻Operating Systems": [
      { name: "Windows", url: "https://microsoft.com/windows" },
      { name: "Linux", url: "https://linux.org" },
      { name: "Fedora", url: "https://getfedora.org" },
      { name: "Ubuntu", url: "https://ubuntu.com" },
      { name: "macOS", url: "https://apple.com/macos" }
    ],
    "📦Other": [
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
      { name: "pip", url: "https://pypi.org/project/pip" }
    ]
  };
  return (
    <MotionDiv
      className="my-10 mx-auto container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionDiv
        className="flex flex-row justify-between items-center"
        variants={itemVariants}
      >
        <div className="flex flex-col gap-2">
          <MotionH1
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            @vehbiu
          </MotionH1>

          <div className="flex flex-row items-center gap-4">
            {navbar.map((item, i) => (
              <MotionA
                key={`navbar-${i}`}
                className="text-gray-500 hover:text-white transition-colors duration-150 flex items-center gap-2"
                href={item.url}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <item.icon size={18} />
                {item.name}
              </MotionA>
            ))}
          </div>
        </div>

        <MotionImg
          className="rounded-full"
          height={64}
          width={64}
          src="https://avatars.githubusercontent.com/u/126095007?v=4"
          alt="my github avatar"
          whileHover={{ scale: 1.1 }}
          style={{
            boxShadow: `0 0 10px rgba(59, 130, 246, 0.5)`,
            transition: 'box-shadow 0.2s'
          }}
        />
      </MotionDiv>

      <MotionHr
        className="my-4 border-gray-700"
        variants={itemVariants}
      />

      <MotionH2
        className="mb-2 text-3xl font-bold tracking-tight"
        variants={itemVariants}
      >
        <MotionSpan
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          👋
        </MotionSpan>
        {" "}Hey, I&apos;m <span className="text-blue-400">@</span>
        <MotionA
          href="https://github.com/vehbiu/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ color: '#3B82F6' }}
        >
          vehbiu
        </MotionA>.
      </MotionH2>

      <MotionDiv
        className="flex flex-col gap-3"
        variants={containerVariants}
      >
        <MotionP
          className="text-gray-300 font-semibold"
          variants={itemVariants}
        >
          I&apos;m a fully self-taught developer and a high-school student living near Chicago.
          I know a wide variety of languages and am constantly interested in learning.
        </MotionP>

        <MotionP
          className="text-gray-300"
          variants={itemVariants}
        >
          I am most familiar with Python, Java, Typescript/JavaScript, and Go. I am currently interested in learning Rust! 🦀
          I am interested in learning many languages slowly and thoroughly.
        </MotionP>

        <MotionDiv
          className="flex flex-row justify-between items-start gap-4 flex-wrap mt-4"
          variants={containerVariants}
        >
          {/* Tech Stack */}
          {Object.entries(techStack).map(([title, items], i) => (
            <ItemList key={i} title={title} items={items} />
          ))}

          {/* Projects */}
          <Projects />
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
}

export default App;