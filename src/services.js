function ajaxQuery(url, type) {
    if (type === undefined) type = "GET";

    return $.ajax({
        type: type,
        url: url
    });
}

function getFastaByUniprotId(uniprotId) {
    return ajaxQuery('https://www.uniprot.org/uniprot/' + uniprotId + '.fasta');
}

function getUnpToPdbMapping(uniprotId) {
    return ajaxQuery('https://www.ebi.ac.uk/pdbe/api/mappings/best_structures/' + uniprotId);
}

function getUnpToSmrMapping(uniprotId) {
    return ajaxQuery('http://cors-proxy.htmldriven.com/?url=https://swissmodel.expasy.org/repository/uniprot/'+uniprotId+'.json?provider=swissmodel');
}

module.exports = {
    getFastaByUniprotId: getFastaByUniprotId
    ,getUnpToPdbMapping: getUnpToPdbMapping
    ,getUnpToSmrMapping: getUnpToSmrMapping
};