import ReactLoading from 'react-loading';

const LoadingBars = () => {
    return (
        <div className="loading-bars">
            <ReactLoading type="bars" color="#440099" height={180} width={80}/>
        </div>
    )
}

export default LoadingBars