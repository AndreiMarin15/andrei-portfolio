"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SocialIcon } from "react-social-icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";
import { Reveal } from "@/app/framer/animate-on-view";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Projects({
  title,
  description,
  role,
  src,
  technologies,
  github,
  deployment,
  year,
  index,
}) {
  return (
    <Card className="bg-background/20 border-none">
      <CardHeader>
        <CardTitle className="text-teal-300">
          <Reveal>{title}</Reveal>
        </CardTitle>
      </CardHeader>
      {index % 2 !== 0 ? (
        // on small screens, the image will be displayed first
        <div className="sm:flex-row flex flex-col-reverse">
          <div className="sm:w-3/5">
            <CardContent>
              <CardDescription className="text-justify">
                <Reveal>{description}</Reveal>
              </CardDescription>
            </CardContent>
            <CardContent>
              <CardDescription>
                <Reveal color={"white"}>Role: {role}</Reveal>
              </CardDescription>
            </CardContent>
            <CardContent>
              {Array.isArray(technologies) && technologies.length > 0 && (
                <CardDescription>
                  {technologies.map((tech, index) => (
                    <Badge key={index} className="m-1">
                      <Reveal color={"white"}>{tech}</Reveal>
                    </Badge>
                  ))}
                </CardDescription>
              )}
            </CardContent>
            <CardContent>
              <CardDescription>
                <Reveal color={"white"}>Year: {year}</Reveal>
              </CardDescription>
            </CardContent>
          </div>
          {src && (
            <div>
              <CardContent>
                {src && (
                  <Reveal>
                    <Image src={src} alt={title} width={400} height={400} className="rounded-xl" />{" "}
                  </Reveal>
                )}
              </CardContent>
            </div>
          )}
        </div>
      ) : (
        <div className="sm:flex ">
          {src && (
            <div>
              <CardContent>
                {src && (
                  <Reveal>
                    <Image src={src} alt={title} width={400} height={400} className="rounded-lg" />{" "}
                  </Reveal>
                )}
              </CardContent>
            </div>
          )}
          <div className="sm:w-3/5">
            <CardContent>
              <CardDescription className="text-justify">
                <Reveal color={"white"}>{description}</Reveal>
              </CardDescription>
            </CardContent>
            <CardContent>
              <CardDescription>
                <Reveal>Role: {role}</Reveal>
              </CardDescription>
            </CardContent>
            <CardContent>
              {Array.isArray(technologies) && technologies.length > 0 && (
                <CardDescription>
                  {technologies.map((tech, index) => (
                    <Badge key={index} className="m-1">
                      <Reveal color={"white"}>{tech}</Reveal>
                    </Badge>
                  ))}
                </CardDescription>
              )}
            </CardContent>
            <CardContent>
              <CardDescription>
                <Reveal>Year: {year}</Reveal>
              </CardDescription>
            </CardContent>
          </div>
        </div>
      )}

      <CardFooter className="border-b px-6 py-4">
        {github && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{ scale: 1 }}
            className="my-3 mr-1 rounded-full"
          >
            <SocialIcon style={{ height: 40, width: 40 }} url={github} />
          </motion.div>
        )}

        {deployment && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{ scale: 1 }}
          >
            <Link
              className={buttonVariants({ variant: "outline" }) + " ml-1"}
              href={deployment}
              target="_blank"
            >
              Visit the Site
            </Link>
          </motion.div>
        )}
      </CardFooter>
    </Card>
  );
}
