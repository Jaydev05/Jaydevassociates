-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  service VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  image VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create website_stats table
CREATE TABLE IF NOT EXISTS website_stats (
  id SERIAL PRIMARY KEY,
  successful_placements INTEGER DEFAULT 0,
  facilities_managed INTEGER DEFAULT 0,
  it_solutions_delivered INTEGER DEFAULT 0,
  properties_transacted INTEGER DEFAULT 0,
  years_experience INTEGER DEFAULT 0,
  happy_clients INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin user (password: admin123)
-- Password hash for 'admin123': $2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSAg/9u2
INSERT INTO admin_users (name, email, password, role) 
VALUES ('Admin', 'admin@jaydevassociates.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSAg/9u2', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (name, position, company, content, rating, is_active) VALUES
('Rajesh Kumar', 'CEO', 'TechVision Solutions', 'Jaydev Associates helped us scale our team efficiently. Their recruitment process is thorough and they understand our technical requirements perfectly. We have hired 15+ developers through them.', 5, true),
('Priya Sharma', 'Operations Manager', 'Manufacturing Corp', 'Their facility management services have been exceptional. Our office maintenance, security, and housekeeping are handled seamlessly. Highly professional team with 24/7 support.', 5, true),
('Amit Patel', 'IT Director', 'Financial Services Ltd', 'We have been using their IT solutions and AMC services for 3 years. Their hardware procurement and software licensing services have saved us significant costs while ensuring quality.', 5, true),
('Sneha Reddy', 'Property Investor', 'Real Estate Portfolio', 'Found my dream commercial property through Jaydev Associates. Their market knowledge and negotiation skills helped me get the best deal. Professional service from start to finish.', 5, true)
ON CONFLICT DO NOTHING;

-- Insert default website stats
INSERT INTO website_stats (successful_placements, facilities_managed, it_solutions_delivered, properties_transacted, years_experience, happy_clients)
VALUES (2500, 150, 300, 200, 5, 1000)
ON CONFLICT DO NOTHING;
