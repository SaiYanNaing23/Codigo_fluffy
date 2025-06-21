'use client';
import React from 'react';
import PetCharacter from './petCharacters';
import  pets  from '@/data/pets.json';
import Image from 'next/image';
import { motion } from 'framer-motion';

const thirdSlice = () => {
    const text = "ふわふわの動物たちに、\n\n囲まれて暮らしたい\n\nペットや動物が大好きなあなたへ";
  return (
    <div className="!min-h-[80vh] bg-orange-50 relative overflow-hidden">
        <div className='hidden md:block ' >
            {pets.map((pet, index) => (
                <div
                key={`${pet.name}-${index}`}
                className="absolute"
                style={{
                    top: `${pet.top}vh`,
                    left: `${pet.left}vw`,
                    transform: 'translate(-50%, -50%)',
                }}
                >
                <PetCharacter pet={pet} index={index} size={100} />
                </div>
            ))}
        </div>
        <motion.div>
            <div className="ml-[100px] mt-[400px] flex lg:flex-row flex-col-reverse justify-between">
              <div>
                  <motion.div
                      className="px-4 mb-[20px]"
                      initial={{ opacity: 0, y: -50 }}
                      whileInView={{ opacity: 1, y: 100 }}
                      viewport={{ once: false, amount: 0.5 }} 
                      transition={{ duration: .8, delay: 0.3 }}
                  >
                      <Image
                          src="/images/section_3.gif"
                          alt="Fluffy Hugs Logo"
                          width={550}
                          height={300}
                          className="!min-w-[550px] !min-h-[300px] mx-auto"
                      />
                  </motion.div>
              </div>
              <div className="text-2xl leading-loose whitespace-pre-wrap text-start lg:text-[18px] xl:text-[24px] ">
                {text.split("").map((char, index) => {
                  if (char === "\n") return <br key={`br-${index}`} />;
                  const floatDuration = 1.5 + (index % 5) * 0.2;
                  const floatDelay = (index % 5) * 0.15;

                  return (
                    <motion.span
                      key={index}
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      style={{ display: "inline-block" }}
                    >
                      <motion.span
                        animate={{ y: [0, -10, 0, 5, 0] }}
                        transition={{
                          duration: floatDuration,
                          delay: floatDelay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{ display: "inline-block" }}
                      >
                        {char}
                      </motion.span>
                    </motion.span>
                  );
                })}
              </div>

            </div>
        </motion.div>
        
    </div>
  );
};

export default thirdSlice;
