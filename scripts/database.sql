--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

-- Started on 2017-07-31 21:08:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12387)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2139 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 185 (class 1259 OID 16396)
-- Name: accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE accounts (
    id integer NOT NULL,
    email character varying NOT NULL,
    username character varying(30) NOT NULL,
    password character varying NOT NULL,
    creation timestamp with time zone NOT NULL,
    level smallint NOT NULL,
    activated boolean NOT NULL
);


ALTER TABLE accounts OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 16402)
-- Name: accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE accounts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE accounts_id_seq OWNER TO postgres;

--
-- TOC entry 2140 (class 0 OID 0)
-- Dependencies: 186
-- Name: accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE accounts_id_seq OWNED BY accounts.id;


--
-- TOC entry 187 (class 1259 OID 16409)
-- Name: activation_codes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE activation_codes (
    accountid integer NOT NULL,
    code character varying(30) NOT NULL
);


ALTER TABLE activation_codes OWNER TO postgres;

--
-- TOC entry 2006 (class 2604 OID 16404)
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY accounts ALTER COLUMN id SET DEFAULT nextval('accounts_id_seq'::regclass);


--
-- TOC entry 2130 (class 0 OID 16396)
-- Dependencies: 185
-- Data for Name: accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY accounts (id, email, username, password, creation, level, activated) FROM stdin;
\.


--
-- TOC entry 2141 (class 0 OID 0)
-- Dependencies: 186
-- Name: accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('accounts_id_seq', 5, true);


--
-- TOC entry 2132 (class 0 OID 16409)
-- Dependencies: 187
-- Data for Name: activation_codes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY activation_codes (accountid, code) FROM stdin;
\.


--
-- TOC entry 2008 (class 2606 OID 16406)
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- TOC entry 2012 (class 2606 OID 16413)
-- Name: activation_codes activation_codes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activation_codes
    ADD CONSTRAINT activation_codes_pkey PRIMARY KEY (accountid);


--
-- TOC entry 2010 (class 2606 OID 16408)
-- Name: accounts user; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY accounts
    ADD CONSTRAINT "user" UNIQUE (email, username);


-- Completed on 2017-07-31 21:08:18

--
-- PostgreSQL database dump complete
--

