/* @flow */
import Parameter from "./Parameter"
import Sort from "./Sort"

/**
 * Filter
 */
export default class Filter
{
    /**
     * The number of entity to return
     */
    count:number;

    /**
     * Offset in the listing
     */
    offset:number;

    /**
     * Sort list
     */
    sorts:Array<Sort>;

    /**
     * Parameters
     */
    parameters:Array<Parameter>;

    /**
     * Constructor
     */
    constructor()
    {
        this.parameters = [];
        this.sorts = [];
    }

    /**
     * Add parameter with a property name
     *
     * @param   {string}            name    Property name
     * @return  {Parameter}                 Parameter
     */
    property(name:string):Parameter
    {
        let parameter = new Parameter;

        this.parameters.push(parameter);

        return parameter;
    }

    /**
     * Add sort directive with a property name
     *
     * @param   {string}        name    Property name
     * @return  {Sort}                  Sort directive
     */
    sort(name:string)
    {
        let sort = new Sort;

        this.sorts.push(sort);

        return sort;
    }
}
