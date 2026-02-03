// Next.js + Tailwind portfolio inspired by zixx-studios.vercel.app
// Ready to deploy on Vercel

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Tokyo
        </motion.h1>
        <p className="mt-4 text-xl text-gray-400">LUA Scripter · Roblox Developer</p>
        <Button className="mt-8 w-fit">View My Work</Button>
      </section>

      {/* ABOUT */}
      <section className="py-24 max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          Hey, I’m Tokyo, a dedicated Roblox developer focused on building immersive,
          interactive experiences. With over two years of experience in Lua scripting,
          game design, and performance optimization, I turn ideas into engaging gameplay
          that keeps players coming back.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="py-24">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            title="Advanced Gun System"
            description="Fully scripted weapon system with shooting mechanics, reload logic, and animations."
          />
          <ProjectCard
            title="Inventory System + Datastore"
            description="Persistent inventory using Roblox DataStores with clean UI and safe saving."
          />
          <ProjectCard
            title="Daily Rewards System"
            description="Login reward system with streak tracking and server-side validation."
          />
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Lua",
            "Roblox Studio",
            "OOP",
            "Datastores",
            "Client/Server Architecture",
            "Optimization",
            "UI Systems",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white/10 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="text-gray-400 mb-6">
          Available for commissions, collaborations, and long-term projects.
        </p>
        <Button>Contact Me</Button>
      </section>
    </main>
  );
}

function ProjectCard({ title, description }) {
  return (
    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
