import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { teamMembers } from '@/data/data';



export const Team = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Our Team</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From the very day you met to the plans for future — let us organize and hold your event where every detail matters
        </p>
        <div className="grid grid-cols-1 feature:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Avatar className="w-full h-full rounded-none transition-transform duration-300 group-hover:scale-105">
            <AvatarImage src={member.image} alt={member.name} className="object-cover" />
          </Avatar>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <div className="space-x-3">
              <Button variant="ghost" size="icon" className="bg-white bg-opacity-20 hover:bg-opacity-40" asChild>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="bg-white bg-opacity-20 hover:bg-opacity-40" asChild>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="bg-white bg-opacity-20 hover:bg-opacity-40" asChild>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4 text-center bg-white group-hover:bg-gray-50 transition-colors duration-300">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
      </CardContent>
    </Card>
  );
};