import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Portfolio({ title, description, imageUrl, techStack, projectLink, codeLink }) {
  return (
    <Card className="h-100" style={{ width: '50vw', maxWidth: '600px', margin: '1rem auto' }}> 
      {imageUrl && (
        <div style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px' 
        }} />
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          {techStack && <p><strong>Technologies Used:</strong> {techStack.join(', ')}</p>}
        </Card.Text>
        <div>
          {projectLink && <Button variant="primary" href={projectLink} target="_blank" rel="noopener noreferrer">View Project</Button>}
          {codeLink && <Button variant="secondary" href={codeLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem' }}>View Code</Button>}
        </div>
      </Card.Body>
    </Card>
  );
}
