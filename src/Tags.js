import styled from 'styled-components/macro';
import { useState } from 'react';

export default function Tags({ tags, onUpdateSkills, onRemoveTag }) {
  const [tag, setTag] = useState('');

  function handleChange(event) {
    setTag(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateSkills(tag);
      setTag('');
    } else if (tag.length === 0 && event.key === 'Backspace') {
      onRemoveTag(tags.pop());
    }
  }

  return (
    <>
      <Label htmlFor="tag_input">Player Skills</Label>
      <Tag>
        <TagCloud>
          {tags.map((tag, index) => (
            <span key={index + tag}>
              {tag}
              <Button type="button" onClick={() => onRemoveTag(tag)}>
                X
              </Button>{' '}
            </span>
          ))}
          <input
            type="text"
            placeholder="Write here..."
            name="tag_input"
            value={tag}
            onChange={handleChange}
            onKeyDown={handleKeyDown} //soll nur passieren wenn enter gedrückt wird
          />
        </TagCloud>
      </Tag>
    </>
  );
}

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Tag = styled.section`
  display: grid;
  font-family: sans-serif;
  gap: 0.2rem;

  input {
    padding: 0.5rem;
    border: none;
    background: none;
    width: 10vw;
    color: white;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #9e38a2;
  }
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;

  span {
    background: #9e38a2;
    color: ivory;
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin: 0.2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: black;
`;
