const Example = ({ mean }) => {
  return (
    <div className="border-4 border-palette-30 rounded-lg shadow-outer">
      {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
        <div key={def.example}>
          {def.example ? <li className="bg-palette-40"> {def.example}</li> : ''}
        </div>
      ))))}
    </div>
  );
};

export default Example;
