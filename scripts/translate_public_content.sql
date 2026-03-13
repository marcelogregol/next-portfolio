DELETE FROM hero;
INSERT INTO hero (greeting, title, subtitle, cta1Text, cta1Href, cta2Text, cta2Href)
VALUES (
  'Hello, I''m Marcelo',
  'Full-Stack Developer',
  'I build modern web applications with a strong focus on performance, usability and clean architecture.',
  'View Projects',
  '#projetos',
  'Get in Touch',
  '#contact'
);

UPDATE about
SET
  title = 'About Me',
  text = 'Full-stack developer passionate about turning ideas into reliable digital products. I work with modern technologies to build fast, scalable applications and thoughtful user experiences.'
WHERE id = 1;

DELETE FROM abouthighlight;
INSERT INTO abouthighlight (aboutId, title)
VALUES
  (1, 'Architecture'),
  (1, 'Performance'),
  (1, 'Clean Code'),
  (1, 'User Experience');

DELETE FROM skill;
INSERT INTO skill (name, description, category, level, iconKey, enabled, displayOrder)
VALUES
  ('React & Next.js', 'Modern front-end development with a focus on performance, routing and scalable UI architecture.', 'Front-end', 'Avancado', 'react', 1, 1),
  ('TypeScript', 'Type-safe development for maintainable codebases and reliable product delivery.', 'Front-end', 'Avancado', 'typescript', 1, 2),
  ('REST APIs', 'API design, authentication and integrations built with clarity and long-term maintainability in mind.', 'Back-end', 'Avancado', 'gear', 1, 3),
  ('Databases', 'Database modelling, query optimisation and structured data management across SQL and NoSQL environments.', 'Database', 'Intermediario', 'database', 1, 4),
  ('Git & Deployment', 'Version control, pull request workflows and deployment practices for dependable releases.', 'Outros', 'Intermediario', 'git', 1, 5),
  ('Tailwind CSS', 'Utility-first styling for responsive, consistent interfaces with fast iteration.', 'Front-end', 'Intermediario', 'tailwind', 1, 6);

DELETE FROM project;
INSERT INTO project (title, shortDesc, longDesc, tagsJson, imageUrl, demoUrl, codeUrl, featured, enabled, displayOrder)
VALUES
  ('Financial Dashboard', 'Dashboard with key metrics and data visualisation.', 'Project focused on data visualisation, performance and a polished user experience.', '["Next.js","API","DB"]', '/images/demo.jpg', '#', '#', 1, 1, 1),
  ('E-Commerce Store', 'Online store with checkout flow and an admin area.', 'Project featuring catalogue management, cart functionality, authentication and third-party integrations.', '["Next.js","Node","Stripe"]', '/images/demo.jpg', '#', '#', 1, 1, 2),
  ('Weather App', 'Responsive weather app with forecast data and a clean interface.', 'Consumes an external API and presents information with a strong focus on clarity and usability.', '["Next.js","API","UI"]', '/images/demo.jpg', '#', '#', 0, 1, 3);

UPDATE contact
SET
  ctaTitle = 'Let''s work together',
  ctaSubtitle = 'Open to professional opportunities across Ireland, whether on-site, hybrid or remote. I would be glad to discuss how I can contribute to your team.',
  ctaButtonText = 'Get in Touch'
WHERE id = 1;
