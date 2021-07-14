'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
const { query } = require('express');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const eventsList = await pool.request().query(sqlQueries.eventslist);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


const creatEvent = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request()
                            .input('Id', sql.NVarChar(128), eventdata.Id)
                            .input('Name', sql.NVarChar(sql.MAX), eventdata.Name)
                            .input('Description', sql.NVarChar(sql.MAX), eventdata.Description)
                            .input('Discriminator', sql.NVarChar(128), eventdata.Discriminator)
                            .query(sqlQueries.createEvent);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}





module.exports = {
    getEvents,
    creatEvent
   
}