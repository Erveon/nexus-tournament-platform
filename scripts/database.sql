--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.7
-- Dumped by pg_dump version 9.6.3

-- Started on 2017-09-12 03:32:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 181 (class 1259 OID 16416)
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
-- TOC entry 182 (class 1259 OID 16422)
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
-- TOC entry 2137 (class 0 OID 0)
-- Dependencies: 182
-- Name: accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE accounts_id_seq OWNED BY accounts.id;


--
-- TOC entry 183 (class 1259 OID 16424)
-- Name: activation_codes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE activation_codes (
    accountid integer NOT NULL,
    code character varying(30) NOT NULL
);


ALTER TABLE activation_codes OWNER TO postgres;

--
-- TOC entry 184 (class 1259 OID 16427)
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE news (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    content text NOT NULL,
    by integer NOT NULL,
    at timestamp with time zone NOT NULL
);


ALTER TABLE news OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16433)
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE news_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE news_id_seq OWNER TO postgres;

--
-- TOC entry 2138 (class 0 OID 0)
-- Dependencies: 185
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE news_id_seq OWNED BY news.id;


--
-- TOC entry 187 (class 1259 OID 16447)
-- Name: tournaments; Type: TABLE; Schema: public; Owner: nexus
--

CREATE TABLE tournaments (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    data jsonb NOT NULL
);


ALTER TABLE tournaments OWNER TO nexus;

--
-- TOC entry 186 (class 1259 OID 16445)
-- Name: tournaments_id_seq; Type: SEQUENCE; Schema: public; Owner: nexus
--

CREATE SEQUENCE tournaments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tournaments_id_seq OWNER TO nexus;

--
-- TOC entry 2139 (class 0 OID 0)
-- Dependencies: 186
-- Name: tournaments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nexus
--

ALTER SEQUENCE tournaments_id_seq OWNED BY tournaments.id;


--
-- TOC entry 2004 (class 2604 OID 16435)
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY accounts ALTER COLUMN id SET DEFAULT nextval('accounts_id_seq'::regclass);


--
-- TOC entry 2005 (class 2604 OID 16436)
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY news ALTER COLUMN id SET DEFAULT nextval('news_id_seq'::regclass);


--
-- TOC entry 2006 (class 2604 OID 16450)
-- Name: tournaments id; Type: DEFAULT; Schema: public; Owner: nexus
--

ALTER TABLE ONLY tournaments ALTER COLUMN id SET DEFAULT nextval('tournaments_id_seq'::regclass);


--
-- TOC entry 2008 (class 2606 OID 16438)
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- TOC entry 2012 (class 2606 OID 16440)
-- Name: activation_codes activation_codes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activation_codes
    ADD CONSTRAINT activation_codes_pkey PRIMARY KEY (accountid);


--
-- TOC entry 2014 (class 2606 OID 16442)
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- TOC entry 2016 (class 2606 OID 16455)
-- Name: tournaments tournaments_pkey; Type: CONSTRAINT; Schema: public; Owner: nexus
--

ALTER TABLE ONLY tournaments
    ADD CONSTRAINT tournaments_pkey PRIMARY KEY (id);


--
-- TOC entry 2010 (class 2606 OID 16444)
-- Name: accounts user; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY accounts
    ADD CONSTRAINT "user" UNIQUE (email, username);


--
-- TOC entry 2136 (class 0 OID 0)
-- Dependencies: 6
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2017-09-12 03:32:17

--
-- PostgreSQL database dump complete
--

