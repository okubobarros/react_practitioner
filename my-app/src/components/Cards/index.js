export default function cards(data) {
    return (
        <div>
            <img src={data.data.image} />
            <p>{data.data.name}</p>
        </div>
    );
}