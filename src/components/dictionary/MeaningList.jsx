
const MeanigList = ({ mean }) => {
  return (
    <div>
      {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
        <div key={def.definition}>
          <li className='bg-palette-20'>{def.definition}</li>
          <hr />
        </div>
      ))))}
    </div>
  );
};

export default MeanigList;
