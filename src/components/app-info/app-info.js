import './app-info.css';

const AppInfo = ({countAll, countIncrease}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Huan</h1>
            <h2>Общее число сотрудников: {countAll}</h2>
            <h2>Премию получат: {countIncrease}</h2>
        </div>
    );
};

export default AppInfo;