$().ready(() => {
    $('#btn-action-attack').click(() => {
        // TODO show mon attacks
        $('.info').empty();

        let att1 = document.createElement('button');
        att1.innerHTML = 'HyperBeam'
        let att2 = document.createElement('button');
        att2.innerHTML = 'HyperBeam'
        let att3 = document.createElement('button');
        att3.innerHTML = 'HyperBeam'
        let att4 = document.createElement('button');
        att4.innerHTML = 'HyperBeam'

        $('.info').append(att1);
        $('.info').append(att2);
        $('.info').append(att3);
        $('.info').append(att4);
    });
});