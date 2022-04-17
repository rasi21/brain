let b = [
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },

]
b.forEach(el => {
    let card = `   <div class="col-lg-3  ds">
    <div class="jw">

        <div class="div-second">
            
        </div>
        <div class="txt">
            <h6>${el.title}</h6>
            <p>${el.brand}</p>
            <h5>${el.price} </h5>
        </div>
    </div>
</div>`;
    document.getElementById('rjw').innerHTML += card;
});