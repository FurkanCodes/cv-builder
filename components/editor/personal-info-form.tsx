"use client";

import { useCV } from '@/components/providers/cv-provider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormField } from '@/components/ui/form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';
import React, { useState, useRef } from 'react';

const PersonalInfoForm = () => {
  const { cvData, updateSection } = useCV();
  const { personalInfo } = cvData;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | undefined>(personalInfo.profileImage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSection('personalInfo', { [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        updateSection('personalInfo', { profileImage: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(undefined);
    updateSection('personalInfo', { profileImage: undefined });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Avatar className="h-16 w-16">
            <AvatarImage src={imagePreview} />
            <AvatarFallback>
              {personalInfo.firstName && personalInfo.lastName
                ? `${personalInfo.firstName[0]}${personalInfo.lastName[0]}`
                : 'CV'}
            </AvatarFallback>
          </Avatar>
          {imagePreview && (
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full"
              onClick={handleRemoveImage}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Photo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleChange}
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Professional Title</Label>
        <Input
          id="title"
          name="title"
          value={personalInfo.title}
          onChange={handleChange}
          placeholder="Full Stack Developer"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={personalInfo.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={personalInfo.phone}
          onChange={handleChange}
          placeholder="+1 123 456 7890"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={personalInfo.address}
          onChange={handleChange}
          placeholder="123 Main St"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={personalInfo.city}
            onChange={handleChange}
            placeholder="New York"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input
            id="postalCode"
            name="postalCode"
            value={personalInfo.postalCode}
            onChange={handleChange}
            placeholder="10001"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          name="country"
          value={personalInfo.country}
          onChange={handleChange}
          placeholder="United States"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website (Optional)</Label>
        <Input
          id="website"
          name="website"
          type="url"
          value={personalInfo.website}
          onChange={handleChange}
          placeholder="https://johndoe.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
        <Input
          id="linkedin"
          name="linkedin"
          type="url"
          value={personalInfo.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/johndoe"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="github">GitHub (Optional)</Label>
        <Input
          id="github"
          name="github"
          type="url"
          value={personalInfo.github}
          onChange={handleChange}
          placeholder="https://github.com/johndoe"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;