

class GiftExchange {
    static async pairs(names) {
        let newList = names.names
        //console.log(newList)
        for (let i = newList.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = newList[i]
            newList[i] = newList[j]
            newList[j] = k
        }
        var splitPairs = function(arr) {
            var pairs = [];
            for (var i=0 ; i<arr.length ; i+=2) {
                if (arr[i+1] !== undefined) {
                    pairs.push ([arr[i], arr[i+1]]);
                } else {
                    pairs.push ([arr[i]]);
                }
            }
            return pairs;
        };
        return splitPairs(newList)
    }
    static async traditional(names) {
        let pairings = this.pairs(names)
        
    }
}

module.exports = GiftExchange