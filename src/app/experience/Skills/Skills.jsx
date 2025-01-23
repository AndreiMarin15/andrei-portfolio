"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/app/framer/animate-on-view";
import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

const skillIcon = "https://skillicons.dev/icons?i=";

export default function Skills() {
  const [languages, setLanguages] = useState(null);
  const [frameworksAndTools, setFrameworksAndTools] = useState(null);
  const [designAndApi, setDesignAndApi] = useState(null);
  const [databases, setDatabases] = useState(null);
  const [devTools, setDevTools] = useState(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const languageData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/skills/languages`
      );
      const frameworkAndToolsData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/skills/frameworks-and-tools`
      );
      const designAndApiData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/skills/design-and-api`
      );
      const databasesData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/skills/db`
      );
      const devToolsData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/skills/dev-tools`
      );

      const languages = await languageData.json();
      const frameworksAndTools = await frameworkAndToolsData.json();
      const designAndApi = await designAndApiData.json();
      const databases = await databasesData.json();
      const devTools = await devToolsData.json();

      setLanguages(languages);
      setFrameworksAndTools(frameworksAndTools);
      setDesignAndApi(designAndApi);
      setDatabases(databases);
      setDevTools(devTools);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (
      languages &&
      frameworksAndTools &&
      designAndApi &&
      databases &&
      devTools
    ) {
      const imageUrls = [
        ...languages,
        ...frameworksAndTools,
        ...designAndApi,
        ...databases,
        ...devTools,
      ].map((skill) => `${skillIcon}${skill.title.toLowerCase()}`);

      let loadedCount = 0;
      imageUrls.forEach((url) => {
        const img = new window.Image();
        img.src = url;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imageUrls.length) {
            setImagesLoaded(true);
          }
        };
      });
    }
  }, [languages, frameworksAndTools, designAndApi, databases, devTools]);

  if (!imagesLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full p-4">
      <div className="flex-col items-center justify-center text-center">
        <div className="mt-5">
          <div className="flex items-center justify-center">
            <Reveal>Languages</Reveal>
          </div>
          {/* </motion.div> */}
          <div className="flex gap-3 mt-2 flex-wrap justify-center">
            {languages.map((skill, id) => (
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: { scale: 0 },
                  animate: { scale: 1, transition: { duration: 0.5 } },
                }}
                key={id}
              >
                <Image
                  src={`${skillIcon}${skill.title.toLowerCase()}`}
                  alt={skill.title}
                  key={id}
                  width={50}
                  height={50}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-center">
            <Reveal>Frameworks & Tools</Reveal>
          </div>
          {/* </motion.div> */}
          <div className="flex gap-3 mt-2 flex-wrap justify-center">
            {frameworksAndTools.map((skill, id) => (
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: { scale: 0 },
                  animate: { scale: 1, transition: { duration: 0.7} },
                }}
                key={id}
              >
                <Image
                  src={`${skillIcon}${skill.title.toLowerCase()}`}
                  alt={skill.title}
                  key={id}
                  width={50}
                  height={50}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-center">
            <Reveal>Design & API Tools</Reveal>
          </div>
          {/* </motion.div> */}
          <div className="flex gap-3 mt-2 flex-wrap justify-center">
            {designAndApi.map((skill, id) => (
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: { scale: 0 },
                  animate: { scale: 1, transition: { duration: 0.7 } },
                }}
                key={id}
              >
                <Image
                  src={`${skillIcon}${skill.title.toLowerCase()}`}
                  alt={skill.title}
                  key={id}
                  width={50}
                  height={50}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-center">
            <Reveal>Databases</Reveal>
          </div>

          <div className="flex gap-3 mt-2 flex-wrap justify-center">
            {databases.map((skill, id) => (
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: { scale: 0 },
                  animate: { scale: 1, transition: { duration: 1 } },
                }}
                key={id}
              >
                <Image
                  src={`${skillIcon}${skill.title.toLowerCase()}`}
                  alt={skill.title}
                  key={id}
                  width={50}
                  height={50}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-center">
            <Reveal>Development & Other Tools</Reveal>
          </div>

          <div className="flex gap-3 mt-2 flex-wrap justify-center">
            {devTools.map((skill, id) => (
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: { scale: 0 },
                  animate: { scale: 1, transition: { duration: 1 } },
                }}
                key={id}
              >
                <Image
                  src={`${skillIcon}${skill.title.toLowerCase()}`}
                  alt={skill.title}
                  key={id}
                  width={50}
                  height={50}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
