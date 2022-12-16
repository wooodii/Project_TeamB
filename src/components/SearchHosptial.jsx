const SearchHosptial = ({전화번호, 주소, 사업장}) => {
    return (
        <div  style={{ width: "300px", height: "110px", border: "2px solid black" }}>
            <div>{사업장 && 사업장}</div>
            <div>{전화번호 && 전화번호}</div>
            <div>{주소 && 주소}</div>
        </div>
    );
}

export default SearchHosptial;