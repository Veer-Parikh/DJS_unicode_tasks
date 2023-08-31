function wordsCounter(input)
{
    let counter = {}

    for(let a of input)
    {
        {
        if (counter[a])
            counter[a]++;
        else
            counter[a]=1;    
        }
    }
    return counter;
}
    let input = ["BMW","Porsche","Audi","Mclaren","BMW","Audi","BMW"]
    let count= wordsCounter(input)

    for(let a in count)
        {
            console.log(a,count[a])
        }