

const List = ({getCard,cost,remainging,totalCost}) => {
    // console.log(getCard);
    return (
        <div >
            <div className="card card-compact bg-base-100 shadow-xl text-center">
            <p className="my-6 text-lg font-semibold bg-blue-400">Credit Hour Remaining : {remainging} hr </p>
            <hr />
            <p className="my-2 text-lg font-semibold">Course Name</p>


            {getCard.map((card,idx)=> <li  key={idx}>{card.title}</li>)}

            <hr className="mt-2" />
            <p className="my-2 text-lg font-semibold">Total Credit Hour : {cost}</p>
            <hr />
            <p className="my-2">Total Price : {totalCost}</p>
            </div>
            
        </div>
    );
};

export default List;