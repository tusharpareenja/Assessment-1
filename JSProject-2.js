let nfts = [];
function mintNFT(name,artist,volume, price, description){
    const nft = {
        name: name,
        artist: artist,
        volume: volume,
        price: price,
        description: description
    };
    nfts.push(nft);
}
function list(){
for (let i = 0; i <nfts.length; i++) {
     const nft = nfts[i];
     console.log(`NFT ${i+1}:`);
     console.log(`Name: ${nft.name}`);
     console.log(`Artist: ${nft.artist}:`);
     console.log(`Volume: ${nft.volume}`);
     console.log(`Price: ${nft.price}`);
     console.log(`Description: ${nft.description }`); 
     console.log("")    
}
}
function supply(){
    return nfts.length
}
mintNFT("Terraforms ", "MatchCastles", "122","39ETH", "A beautiful image of transformer" );
mintNFT("Formaer ", "Alice", "12","89ETH", "A best suited beach photo" );
mintNFT("Club", "Bob", "120","29ETH", "A club image" );
list();
console.log(`Total supply: ${supply()}`);