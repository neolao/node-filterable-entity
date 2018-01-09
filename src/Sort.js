/* @flow */

export const ASCENDING = "ASC";
export const DESCENDING = "DESC";

/**
 * Filter sort directive
 */
export default class Sort
{
    /**
     * Property name
     */
    name:string;

    /**
     * Sort direction
     */
    direction:string;

    byAscending()
    {
        this.direction = ASCENDING;
    }

    byDescending()
    {
        this.direction = DESCENDING;
    }
}
