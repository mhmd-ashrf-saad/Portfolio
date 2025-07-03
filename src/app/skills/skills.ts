import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

interface Certificate {
  name: string;
  issuer: string;
  credentialUrl?: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {

  skills: Skill[] = [
    // Programming Languages
    { name: 'HTML', level: 95, category: 'languages', icon: 'code' },
    { name: 'CSS', level: 90, category: 'languages', icon: 'palette' },
    { name: 'JavaScript', level: 85, category: 'languages', icon: 'javascript' },
    { name: 'TypeScript', level: 80, category: 'languages', icon: 'typescript' },
    { name: 'Python', level: 75, category: 'languages', icon: 'python' },
    { name: 'C#', level: 90, category: 'languages', icon: 'csharp' },
    { name: 'C++', level: 90, category: 'languages', icon: 'cpp' },

    // Frameworks
    { name: 'Angular', level: 70, category: 'frameworks', icon: 'angular' },
    { name: 'Django', level: 65, category: 'frameworks', icon: 'django' },
    { name: '.NET', level: 40, category: 'frameworks', icon: 'dotnet' },
    { name: 'Bootstrap', level: 90, category: 'frameworks', icon: 'bootstrap' },
    { name: 'Angular Material', level: 85, category: 'frameworks', icon: 'material' },

    // Databases
    { name: 'SQL Server', level: 80, category: 'databases', icon: 'database' },
    { name: 'PostgreSQL', level: 75, category: 'databases', icon: 'postgresql' },

    // Tools
    { name: 'Git/GitHub', level: 85, category: 'tools', icon: 'git' },
    { name: 'VS Code', level: 90, category: 'tools', icon: 'vscode' },
    { name: 'Visual Studio', level: 80, category: 'tools', icon: 'visualstudio' },
    { name: 'JetBrains IDEs', level: 90, category: 'tools', icon: 'jetbrains' },
    { name: 'Photoshop', level: 70, category: 'tools', icon: 'photoshop' },
    { name: 'Figma', level: 75, category: 'tools', icon: 'figma' }
  ];

  certificates: Certificate[] = [
    {
      name: 'Full Stack Web Development (Django)',
      issuer: 'ITI',
      credentialUrl: 'https://drive.google.com/file/d/1aZfYG9t0oHur11HHoR_p6iyZqBVZtuTQ/view?usp=sharing'
    },
    {
      name: 'ISTQB® Foundation Level',
      issuer: 'ISTQB',
      credentialUrl: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=2hQV9lTP1N&qrcode=1'
    },
    {
      name: 'Introduction to Software Testing Concepts & Techniques',
      issuer: 'Online Platform',
      credentialUrl: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=iIng0ixZcA&qrcode=1'
    },
    {
      name: 'Effective test cases and bug reporting',
      issuer: 'Online Platform',
      credentialUrl: 'https://drive.google.com/file/d/1-0cD67P_WnONgw-tlTwp77gWbPqmkyTH/view?usp=sharing'
    },
    {
      name: 'AWS Cloud Foundation',
      issuer: 'Amazon Web Services',
      credentialUrl: 'https://www.credly.com/go/fVgS0kWr'
    },
    {
      name: 'AWS Cloud Architecting',
      issuer: 'Amazon Web Services',
      credentialUrl: 'https://www.credly.com/go/vkUTiNYM'
    },
    {
      name: 'AWS Cloud Web Application Builder',
      issuer: 'Amazon Web Services',
      credentialUrl: 'https://www.credly.com/go/mNWq4533'
    },
    {
      name: 'Introduction to Python',
      issuer: 'Online Platform',
      credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/129ff4ec6093161a9c94e8ad240847a592fe5474'
    },
    {
      name: 'Intermediate Python',
      issuer: 'Online Platform',
      credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/892704fe6da2301f8e9a838eb4eb346715559dfd'
    },
    {
      name: 'Data Manipulation with pandas',
      issuer: 'Online Platform',
      credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/531fbcc05d91a22f4bc821f944a90efb53c28800'
    }
  ];

  softSkills: string[] = [
    'Leadership',
    'Problem Solving',
    'Communication',
    'Team Management'
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getSkillLevelWidth(level: number): string {
    return `${level}%`;
  }
}
