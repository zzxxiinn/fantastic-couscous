import { useState } from 'react';
import { Option, TagsSelector } from './components/tags-selector';

const options: Option[] = [
  { id: '1', label: 'label1' },
  { id: '2', label: 'label2' },
  { id: '3', label: 'label3' },
  { id: '4', label: 'label4' },
  { id: '5', label: 'label5' },
];

function App() {
  const [selected, setSelected] = useState<Option[]>([]);

  return (
    <>
      <div className='w-full h-full p-4'>
        Tags selector:
        <TagsSelector
          placeholder='选择标签'
          className='w-64'
          selected={selected}
          onSelectChange={(value) => {
            setSelected(value.map((tag) => ({ id: tag.id, label: tag.label })));
          }}
          options={options}
        />
      </div>
    </>
  );
}

export default App;
