declare module '@zotero/utilities' {
	namespace Zotero {
		/**
		 * @see https://github.com/zotero/utilities/blob/master/utilities.js
		 */
		namespace Utilities {
			/**
			 * Returns a function which will execute `fn` with provided arguments
			 * after `delay` milliseconds and not more than once, if called multiple
			 * times. See
			 * http://stackoverflow.com/questions/24004791/can-someone-explain-the-debounce-function-in-javascript
			 *
			 * @param fn function to debounce
			 * @param delay number of milliseconds to delay the function execution
			 *
			 * @see https://github.com/zotero/utilities/blob/master/utilities.js#L54
			 */
			function debounce<T>(fn: T, delay?: number): T
			function throttle<T>(
				fn: T,
				wait: number,
				options?: { leading: boolean; trailing: boolean }
			): T
			function capitalizeName(s: string): string
			function cleanAuthor<T extends CreatorType>(
				author: string,
				creatorType: T,
				useComma?: boolean
			): Creator<T>
			function trim(s: string): string
			function trimInternal(s: string): string
			function superCleanString(s: string): string
			function isHTTPURL(url: string, allowNoScheme: boolean): boolean
			function cleanURL(url: string, tryHttp: boolean): string
			function cleanTags(s: string): string
			function cleanDOI(s: string): string
			function cleanISBN(s: string, dontValidate: boolean): string | false
			function toISBN13(isbnStr: string): string
			function cleanISSN(issnStr: string): string | false
			function text2html(s: string, singleNewlineIsParagraph: boolean): string
			function htmlSpecialChars(s: string): string
			function unescapeHTML(s: string): string
			// unimplemented: dom2text
			function autoLink(s: string): string
			function parseMarkup(s: string): string
			function levenshtein(a: string, b: string): number
			function isEmpty(o: object): boolean
			function arrayDiff<T>(array1: T[], array2: T[], useIndex?: false): T[]
			function arrayDiff<T>(array1: T[], array2: T[], useIndex: true): number[]
			function arrayEquals<T>(array1: T[], array2: T[]): boolean
			function arrayShuffle<T>(array: T[]): T[]
			function arrayUnique<T>(array: T[]): T[]
			function forEachChunk<T, R>(
				array: T[],
				chunkSize: number,
				func: (chunk: T[]) => R
			): R[]
			function assignProps(target: any, source: any, props?: string[]): void
			function rand(min: number, max: number): number
			function getPageRange(pages: string): [fromPage: number, toPage: number]
			function lpad(s: string, pad: string, length: number): string

			function ellipsize(
				s: string,
				len: number,
				wordBoundary?: boolean,
				countChars?: boolean
			): string

			function pluralize(
				num: number,
				forms: [singular: string, plural: string] | string
			): string

			function numberFormat(
				num: number,
				decimalPlaces: number,
				decimalPoint?: string,
				thousandsSep?: string
			): string

			function removeDiacritics(s: string, lowercaseOnly?: boolean): string
			// processAsync
			function deepCopy<Type>(obj: Type): Type
			function itemTypeExists(itemType: ItemType): boolean
			function getCreatorsForType(itemType: ItemType): CreatorType[]
			function fieldIsValidForType(field: string, itemType: ItemType): boolean
			function getLocalizedCreatorType(itemType: ItemType): string
			function quotemeta(literal: string): string
			function xpath(
				elements: Element | Element[],
				xpath: string,
				namespaces?: { [prefix: string]: string }
			): Element[]
			function xpathText(
				node: Element | Element[],
				xpath: string,
				namespaces?: { [prefix: string]: string },
				delimiter?: string
			): string | undefined
			function randomString(len?: number, chars?: string): string
			// varDump
			function itemToCSLJSON<R = any>(item: Zotero.Item): R | Promise<R>
			function itemFromCSLJSON<T = any>(item: Zotero.Item, cslItem: T): void
			function parseURL(url: string): {
				fileName: string
				fileExtension: string
				fileBaseName: string
			}
			function resolveIntermediateURL(url: string): string
			function stringToUTF8Array(
				s: string,
				array: number[] | Uint8Array,
				offset?: number
			): void
			function getStringByteLength(s: string): number
			function determineAttachmentIcon(attachment: Attachment): string
			function generateObjectKey(): string
			function isValidObjectKey(s: string): boolean
			// XRegExp

			function capitalizeTitle(s: string, force?: boolean): string
			function getVersion(): string
			function getItemArray(
				doc: Document,
				inHere: Element | Element[],
				urlRe?: RegExp,
				rejectRe?: RegExp
			): { [link: string]: string }

			/** @deprecated use `requestDocument()` */
			function processDocuments<R = any>(
				urls: string | string[],
				processor: (doc: Document) => R,
				noCompleteOnError?: boolean
			): void

			/** @deprecated use `request()`, `requestText()`, `requestJSON()`, or `requestDocument()` */
			function doGet(
				urls: string | string[],
				processor?: (text: string) => void,
				done?: () => void,
				responseCharset?: string,
				requestHeaders?: { [header: string]: string },
				successCodes?: number[]
			): boolean

			/** @deprecated use `request()`, `requestText()`, `requestJSON()`, or `requestDocument()` */
			function doPost(
				url: string,
				body: string,
				onDone: (text: string, xmlhttp: XMLHttpRequest) => void,
				requestHeaders?: { [header: string]: string },
				responseCharset?: string,
				successCodes?: number[]
			): boolean

			function urlToProxy(url: string): string
			function urlToProper(url: string): string
			function formatDate(date: Date, shortFormat?: boolean): string
			function strToDate(str: string): Date
			function strToISO(str: string): string

			function createContextObject(
				item: Zotero.Item,
				version: string,
				asObj?: boolean
			): any

			function parseContextObject(
				co: string,
				item: Zotero.Item[]
			): Zotero.Item[] | false

			interface HTTPRequestParameters<T extends HTTPResponseType> {
				method?: string
				headers?: Record<string, string>
				body?: string
				responseCharset?: string
				responseType?: T
			}

			type HTTPResponseType = 'text' | 'json' | 'document'

			type HTTPResponse<T> = {
				status: number
				headers: Record<string, string>
				body: T
			}

			function request(
				url: string,
				params?: HTTPRequestParameters<'text'>
			): Promise<HTTPResponse<string>>

			function requestText(
				url: string,
				params?: HTTPRequestParameters<'text'>
			): Promise<string>

			function request<R = any>(
				url: string,
				params?: HTTPRequestParameters<'json'>
			): Promise<HTTPResponse<R>>

			function requestJSON<R = any>(
				url: string,
				params?: HTTPRequestParameters<'json'>
			): Promise<R>

			function request(
				url: string,
				params?: HTTPRequestParameters<'document'>
			): Promise<HTTPResponse<Document>>

			function requestDocument(
				url: string,
				params?: HTTPRequestParameters<'document'>
			): Promise<Document>
		}

		interface Attachment {
			title: string
			snapshot?: boolean
			mimeType?: string
			url?: string
			document?: Document
			path?: string
			proxy?: boolean
		}

		type CreatorType =
			| 'artist'
			| 'contributor'
			| 'performer'
			| 'composer'
			| 'wordsBy'
			| 'sponsor'
			| 'cosponsor'
			| 'author'
			| 'commenter'
			| 'editor'
			| 'translator'
			| 'seriesEditor'
			| 'bookAuthor'
			| 'counsel'
			| 'programmer'
			| 'reviewedAuthor'
			| 'recipient'
			| 'director'
			| 'scriptwriter'
			| 'producer'
			| 'interviewee'
			| 'interviewer'
			| 'cartographer'
			| 'inventor'
			| 'attorneyAgent'
			| 'podcaster'
			| 'guest'
			| 'presenter'
			| 'castMember'

		interface Creator<T extends CreatorType> {
			lastName?: string
			firstName?: string
			creatorType: T
			fieldMode?: 1
		}

		interface Tag {
			tag: string
		}

		interface ItemTypes {
			artwork: ArtworkItem
			audioRecording: AudioRecordingItem
			bill: BillItem
			blogPost: BlogPostItem
			book: BookItem
			bookSection: BookSectionItem
			case: CaseItem
			computerProgram: ComputerProgramItem
			conferencePaper: ConferencePaperItem
			dictionaryEntry: DictionaryEntryItem
			document: DocumentItem
			email: EmailItem
			encyclopediaArticle: EncyclopediaArticleItem
			film: FilmItem
			forumPost: ForumPostItem
			hearing: HearingItem
			instantMessage: InstantMessageItem
			interview: InterviewItem
			journalArticle: JournalArticleItem
			letter: LetterItem
			magazineArticle: MagazineArticleItem
			manuscript: ManuscriptItem
			map: MapItem
			newspaperArticle: NewspaperArticleItem
			patent: PatentItem
			podcast: PodcastItem
			preprint: PreprintItem
			presentation: PresentationItem
			radioBroadcast: RadioBroadcastItem
			report: ReportItem
			statute: StatuteItem
			thesis: ThesisItem
			tvBroadcast: TVBroadcastItem
			videoRecording: VideoRecordingItem
			webpage: WebpageItem
		}

		type ItemType = keyof ItemTypes

		var Item: {
			new <T extends ItemType>(itemType: T): ItemTypes[T]
			new (itemType: string): Item
		}

		/**
		 * Generic item with unknown type
		 */
		type Item = ItemTypes[ItemType]

		interface BaseItem<I extends ItemType, C extends CreatorType> {
			abstractNote?: string
			accessDate?: string
			attachments: Attachment[]
			complete(): void
			creators: Creator<C>[]
			extra?: string
			itemType: I
			language?: string
			notes: Note[]
			rights?: string
			seeAlso: string[]
			shortTitle?: string
			tags: Tag[]
			url?: string
		}

		/** Item stored in a library */
		interface LibraryBaseItem {
			archive?: string
			archiveLocation?: string
			callNumber?: string
			date?: string
			libraryCatalog?: string
			title?: string
		}

		interface SeriesBaseItem {
			series?: string
			seriesNumber?: string
		}

		interface PublishedBaseItem {
			place?: string
			date?: string
			publisher?: string
		}

		interface MediaBaseItem {
			date?: string
			runningTime?: string
		}

		/** Item that is one of several volumes */
		interface VolumeBaseItem {
			ISBN?: string
			numberOfVolumes?: string
			volume?: string
		}

		interface ArtworkItem
			extends LibraryBaseItem,
				BaseItem<'artwork', 'artist' | 'contributor'> {
			artworkMedium?: string
			artworkSize?: string
		}

		interface AudioRecordingItem
			extends MediaBaseItem,
				LibraryBaseItem,
				VolumeBaseItem,
				BaseItem<
					'audioRecording',
					'performer' | 'composer' | 'contributor' | 'wordsBy'
				> {
			audioRecordingFormat?: string
			seriesTitle?: string
			place?: string
			label?: string
			ISBN?: string
		}

		interface BillItem
			extends BaseItem<'bill', 'sponsor' | 'contributor' | 'cosponsor'> {
			title?: string
			abstractNote?: string
			billNumber?: string
			code?: string
			codePages?: string
			codeVolume?: string
			date?: string
			history?: string
			language?: string
			legislativeBody?: string
			section?: string
			session?: string
		}

		interface BlogPostItem
			extends BaseItem<'blogPost', 'author' | 'commenter' | 'contributor'> {
			blogTitle?: string
			date?: string
			language?: string
			title?: string
			websiteType?: string
		}

		interface BookItem
			extends PublishedBaseItem,
				VolumeBaseItem,
				SeriesBaseItem,
				LibraryBaseItem,
				BaseItem<
					'book',
					'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator'
				> {
			edition?: string
			numPages?: string
		}

		interface BookSectionItem
			extends SeriesBaseItem,
				LibraryBaseItem,
				VolumeBaseItem,
				BaseItem<
					'bookSection',
					| 'author'
					| 'bookAuthor'
					| 'contributor'
					| 'editor'
					| 'seriesEditor'
					| 'translator'
				> {
			bookTitle?: string
			edition?: string
			pages?: string
		}

		interface CaseItem
			extends BaseItem<'case', 'author' | 'contributor' | 'counsel'> {
			caseName?: string
			court?: string
			dateDecided?: string
			docketNumber?: string
			firstPage?: string
			history?: string
			language?: string
			reporter?: string
			reporterVolume?: string
		}

		interface ComputerProgramItem
			extends LibraryBaseItem,
				BaseItem<'computerProgram', 'programmer' | 'contributor'> {
			company?: string
			ISBN?: string
			place?: string
			programmingLanguage?: string
			seriesTitle?: string
			system?: string
			versionNumber?: string
			/** Use {@link programmingLanguage} */
			language: never
		}

		interface ConferencePaperItem
			extends LibraryBaseItem,
				BaseItem<
					'conferencePaper',
					'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator'
				> {
			proceedingsTitle?: string
			conferenceName?: string
			volume?: string
			pages?: string
			series?: string
			DOI?: string
			ISBN?: string
		}

		interface DictionaryEntryItem
			extends SeriesBaseItem,
				PublishedBaseItem,
				VolumeBaseItem,
				LibraryBaseItem,
				BaseItem<
					'dictionaryEntry',
					'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator'
				> {
			dictionaryTitle?: string
			edition?: string
			ISBN?: string
			pages?: string
		}

		interface DocumentItem
			extends PublishedBaseItem,
				LibraryBaseItem,
				BaseItem<
					'document',
					'author' | 'contributor' | 'editor' | 'reviewedAuthor' | 'translator'
				> {}

		interface EmailItem
			extends BaseItem<'email', 'author' | 'contributor' | 'recipient'> {
			date?: string
			subject?: string
		}

		interface EncyclopediaArticleItem
			extends PublishedBaseItem,
				SeriesBaseItem,
				VolumeBaseItem,
				LibraryBaseItem,
				BaseItem<
					'encyclopediaArticle',
					'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator'
				> {
			edition?: string
			encyclopediaTitle?: string
			pages?: string
		}

		interface FilmItem
			extends MediaBaseItem,
				LibraryBaseItem,
				BaseItem<
					'film',
					'director' | 'contributor' | 'producer' | 'scriptwriter'
				> {
			distributor?: string
			genre?: string
			videoRecordingFormat?: string
		}

		interface ForumPostItem
			extends BaseItem<'forumPost', 'author' | 'contributor'> {
			date?: string
			forumTitle?: string
			postType?: string
			title?: string
		}

		interface HearingItem
			extends PublishedBaseItem,
				BaseItem<'hearing', 'contributor'> {
			title?: string
			committee?: string
			numberOfVolumes?: string
			documentNumber?: string
			pages?: string
			legislativeBody?: string
			session?: string
			history?: string
		}

		interface InstantMessageItem
			extends BaseItem<
				'instantMessage',
				'author' | 'contributor' | 'recipient'
			> {
			title?: string
			date?: string
		}

		interface InterviewItem
			extends LibraryBaseItem,
				BaseItem<
					'interview',
					'interviewee' | 'contributor' | 'interviewer' | 'translator'
				> {
			interviewMedium?: string
		}

		interface JournalArticleItem
			extends LibraryBaseItem,
				BaseItem<
					'journalArticle',
					'author' | 'contributor' | 'editor' | 'reviewedAuthor' | 'translator'
				> {
			DOI?: string
			ISSN?: string
			issue?: string
			journalAbbreviation?: string
			pages?: string
			publicationTitle?: string
			series?: string
			seriesText?: string
			seriesTitle?: string
			volume?: string
		}

		interface LetterItem
			extends LibraryBaseItem,
				BaseItem<'letter', 'author' | 'contributor' | 'recipient'> {
			letterType?: string
		}

		interface MagazineArticleItem
			extends LibraryBaseItem,
				BaseItem<
					'magazineArticle',
					'author' | 'contributor' | 'reviewedAuthor' | 'translator'
				> {
			publicationTitle?: string
			volume?: string
			issue?: string
			pages?: string
			ISSN?: string
		}

		interface ManuscriptItem
			extends LibraryBaseItem,
				BaseItem<'manuscript', 'author' | 'contributor' | 'translator'> {
			manuscriptType?: string
			numPages?: string
			place?: string
		}

		interface MapItem
			extends PublishedBaseItem,
				LibraryBaseItem,
				BaseItem<'map', 'cartographer' | 'contributor' | 'seriesEditor'> {
			edition?: string
			ISBN?: string
			mapType?: string
			scale?: string
			seriesTitle?: string
		}

		interface NewspaperArticleItem
			extends LibraryBaseItem,
				BaseItem<
					'newspaperArticle',
					'author' | 'contributor' | 'reviewedAuthor' | 'translator'
				> {
			edition?: string
			ISSN?: string
			pages?: string
			place?: string
			publicationTitle?: string
			section?: string
		}

		interface PatentItem
			extends BaseItem<'patent', 'inventor' | 'attorneyAgent' | 'contributor'> {
			applicationNumber?: string
			assignee?: string
			country?: string
			filingDate?: string
			issueDate?: string
			issuingAuthority?: string
			legalStatus?: string
			pages?: string
			patentNumber?: string
			place?: string
			priorityNumbers?: string
			references?: string
			title?: string
		}

		interface PodcastItem
			extends MediaBaseItem,
				BaseItem<'podcast', 'podcaster' | 'contributor' | 'guest'> {
			title?: string
			seriesTitle?: string
			episodeNumber?: string
			audioFileType?: string
		}

		interface PreprintItem
			extends SeriesBaseItem,
				LibraryBaseItem,
				BaseItem<
					'preprint',
					'author' | 'contributor' | 'editor' | 'reviewedAuthor' | 'translator'
				> {
			title?: string
			date?: string
			genre?: string
			repository?: string
			archiveID?: string
			place?: string
			DOI?: string
			citationKey?: string
		}

		interface PresentationItem
			extends BaseItem<'presentation', 'presenter' | 'contributor'> {
			title?: string
			date?: string
			presentationType?: string
			place?: string
			meetingName?: string
		}

		interface RadioBroadcastItem
			extends MediaBaseItem,
				LibraryBaseItem,
				BaseItem<
					'radioBroadcast',
					| 'director'
					| 'castMember'
					| 'contributor'
					| 'guest'
					| 'producer'
					| 'scriptwriter'
				> {
			audioRecordingFormat?: string
			episodeNumber?: string
			network?: string
			place?: string
			programTitle?: string
		}

		interface ReportItem
			extends LibraryBaseItem,
				BaseItem<
					'report',
					'author' | 'contributor' | 'seriesEditor' | 'translator'
				> {
			institution?: string
			pages?: string
			place?: string
			reportNumber?: string
			reportType?: string
			seriesTitle?: string
		}

		interface StatuteItem
			extends BaseItem<'statute', 'author' | 'contributor'> {
			code?: string
			codeNumber?: string
			dateEnacted?: string
			history?: string
			nameOfAct?: string
			pages?: string
			publicLawNumber?: string
			section?: string
			session?: string
		}

		interface ThesisItem
			extends LibraryBaseItem,
				BaseItem<'thesis', 'author' | 'contributor'> {
			date?: string
			numPages?: string
			place?: string
			thesisType?: string
			university?: string
		}

		interface TVBroadcastItem
			extends MediaBaseItem,
				LibraryBaseItem,
				BaseItem<
					'tvBroadcast',
					| 'director'
					| 'castMember'
					| 'contributor'
					| 'guest'
					| 'producer'
					| 'scriptwriter'
				> {
			episodeNumber?: string
			network?: string
			place?: string
			programTitle?: string
			videoRecordingFormat?: string
		}

		interface VideoRecordingItem
			extends MediaBaseItem,
				LibraryBaseItem,
				VolumeBaseItem,
				BaseItem<
					'videoRecording',
					| 'director'
					| 'castMember'
					| 'contributor'
					| 'producer'
					| 'scriptwriter'
				> {
			place?: string
			seriesTitle?: string
			studio?: string
			videoRecordingFormat?: string
		}

		interface WebpageItem
			extends BaseItem<'webpage', 'author' | 'contributor' | 'translator'> {
			date?: string
			title?: string
			websiteTitle?: string
			websiteType?: string
		}

		interface Note {
			title?: string
			note: string
		}

		interface Collection {}

		interface Translator {
			[key: string]: any // allow for exports
		}

		const enum TranslatorType {
			Import = 1,
			Export = 2,
			Web = 4,
			Search = 8
		}

		const enum ConnectorType {
			Firefox = 'g',
			Gecko = Firefox,
			Chrome = 'c',
			Safari = 's',
			InternetExplorer = 'i',
			IE = InternetExplorer,
			Bookmarklet = 'b',
			TranslationServer = 'v'
		}

		/**
		 * The form in which the input data is presented to the translator
		 */
		const enum ImportDataMode {
			/**
			 * Zotero will parse the input as XML and expose the data through the
			 * `Zotero.RDF` object
			 */
			RDF = 'rdf/xml',
			/**
			 * Zotero will expose the data through the function `Zotero.getXML()
			 */
			XML = 'xml/dom'
		}

		/**
		 * @see https://www.zotero.org/support/dev/translators#metadata
		 */
		interface TranslatorConfig {
			/**
			 * The unique internal ID by which Zotero identifies the translator.
			 * You must use a stable GUID, as the translatorID is used for
			 * automatic updating of translators, and for calling translators
			 * within other translators.
			 */
			translatorID: string
			/** The name of the translator */
			label: string
			/** The author(s) of the translator */
			creator: string
			/**
			 * - For *web* translators, the target should specify a JavaScript
			 * regular expression (note that escaping requires two backslashes: one
			 * for the regular expression itself, and one for the JSON, e.g.
			 * `^https?://(www\\.)?example.com/`. If using Scaffold, it takes care
			 * of the JSON escaping, so backslashes do not need to be escaped).
			 * When only matching a domain, the translator should terminate in a
			 * forward slash, so it only matches a non-proxied domain. Zotero will
			 * take care of de-proxifying the URL and pass the de-proxified URL to
			 * the translator.
			 *
			 * Whenever a webpage is loaded, Zotero tests the target regular
			 * expressions of all web translators on the webpage URL. If there is
			 * a translator with a matching target, this translator’s `detectWeb`
			 * function is run. If this function finds item metadata, the Zotero
			 * translator icon appears or becomes active in the browser. When
			 * multiple translators have a matching target, the translator with
			 * the lowest priority number is selected.
			 *
			 * Web translators with an empty target string (e.g. the DOI
			 * translator) match every webpage, but normally have a high priority
			 * number and are only used when no other translator matches.
			 *
			 * - For *import* translators, the target is set to the expected
			 * extension (e.g. the BibTeX import/export translator has its target
			 * set to `bib`; selecting BibTex in Zotero’s import window filters for
			 * files with a `.bib` extension).
			 *
			 * - For *export* translators, the target is set to the extension that
			 *  should be given to generated files (e.g. the BibTeX translator
			 * produces `filename.bib` files).
			 */
			target: RegExp | string
			minVersion: string
			maxVersion: string
			/**
			 * An integer indicating translator priority. When multiple translators
			 * can translate a source, the translator with the lowest priority
			 * number is selected. Site-specific web translators normally have a
			 * priority of `100`. For guidelines on picking an appropriate priority
			 * for web translators see [this page][1].
			 *
			 * [1]: https://www.zotero.org/support/dev/translators/priority
			 */
			priority: number
			/**
			 * Set to `true` for translators that are added to the Zotero repo and
			 * distributed to all Zotero users, and `false` for those that are not
			 */
			inRepository: boolean
			/**
			 * An integer specifying to which type(s) the translator belongs. The
			 * value is the sum of the values assigned to each type: import (1),
			 * export (2), web (4) and search (8). E.g. the value of
			 * `translatorType` is 2 for an export translator, and 13 for a
			 * search/web/import translator, because 13=8+4+1.
			 */
			translatorType: number
			/**
			 * A string containing one or more of the letters `g`, `c`, `s`, `i`,
			 * representing the connectors that the translator can be run in –
			 * Gecko (Firefox), Chrome, Safari, Internet Explorer, respectively.
			 * `b` indicates support for the Bookmarklet (zotero-dev thread) and
			 * `v` indicates support for the translation-server. For more
			 * information, see [Connectors][1].
			 *
			 * [1]: https://www.zotero.org/support/dev/translators/connectors
			 */
			browserSupport: string
			/**
			 * The date and time when the translator was last modified (format
			 * `YYYY-MM-DD HH:MM:SS`). For the metadata to be read correctly, this
			 * line must be the last line in the JSON block.
			 */
			lastUpdated: string

			configOptions?: {
				dataMode?: ImportDataMode
				/**
				 * For *export* translators, set to `true` or `false`. If `true`, an
				 * export translator will have access to the collection names and
				 * can recreate them in the exported file.
				 */
				getCollections?: boolean
			}

			displayOptions?: {
				/**
				 * The default character set to use for export, defaults to `UTF-8`
				 */
				exportCharset?: string
				exportFileData?: boolean
				exportNotes?: boolean
				exportTags?: boolean
			}
		}

		interface WebTranslator extends Translator {
			detectWeb(doc: Document, url: string): ItemType | 'multiple' | false
			doWeb(doc: Document, url: string): void | Promise<void>

			// strongly type commonly-used translator exports
			itemType?: ItemType
		}

		interface ImportTranslator extends Translator {
			detectImport(): boolean
			doImport(): void
		}

		/**
		 * @see https://www.zotero.org/support/dev/translators/coding#export_translators
		 */
		interface ExportTranslator extends Translator {
			doExport(): void
		}

		interface SearchTranslator extends Translator {
			detectSearch(items: Zotero.Item[] | Zotero.Item): boolean
			doSearch(items: Zotero.Item[] | Zotero.Item): void
		}

		interface Translate<T extends Translator> {
			setTranslator(translator: T[] | T | string): boolean
			getTranslatorObject(): Promise<T>
			getTranslatorObject(receiver: (obj: T) => void): void

			setHandler(
				type: 'select',
				handler: (
					translate: Zotero.Translate<T>,
					items: { [id: string]: string }
				) => string[]
			): void
			setHandler(
				type: 'itemDone',
				handler: (translate: Zotero.Translate<T>, item: Zotero.Item) => void
			): void
			setHandler(
				type: 'collectionDone',
				handler: (
					translate: Zotero.Translate<T>,
					collection: Zotero.Collection
				) => void
			): void
			setHandler(
				type: 'done',
				handler: (translate: Zotero.Translate<T>, success: boolean) => void
			): void
			setHandler(
				type: 'debug',
				handler: (translate: Zotero.Translate<T>, message: string) => boolean
			): void
			setHandler(
				type: 'error',
				handler: (translate: Zotero.Translate<T>, error: Error | string) => void
			): void
			setHandler(
				type: 'translators',
				handler: (translate: Zotero.Translate<T>, translators: T[]) => void
			): void
			setHandler(
				type: 'pageModified',
				handler: (translate: Zotero.Translate<T>, doc: Document) => void
			): void

			clearHandlers(
				type:
					| 'select'
					| 'itemDone'
					| 'collectionDone'
					| 'done'
					| 'debug'
					| 'error'
					| 'translators'
					| 'pageModified'
			): void

			removeHandler(
				type: 'select',
				handler: (
					translate: Translate<T>,
					items: { [id: string]: string }
				) => string[]
			): void
			removeHandler(
				type: 'itemDone',
				handler: (translate: Translate<T>, item: Item) => void
			): void
			removeHandler(
				type: 'collectionDone',
				handler: (translate: Translate<T>, collection: Collection) => void
			): void
			removeHandler(
				type: 'done',
				handler: (translate: Translate<T>, success: boolean) => void
			): void
			removeHandler(
				type: 'debug',
				handler: (translate: Translate<T>, message: string) => boolean
			): void
			removeHandler(
				type: 'error',
				handler: (translate: Translate<T>, error: Error | string) => void
			): void
			removeHandler(
				type: 'translators',
				handler: (translate: Translate<T>, translators: T[]) => void
			): void
			removeHandler(
				type: 'pageModified',
				handler: (translate: Translate<T>, doc: Document) => void
			): void

			getTranslators(
				getAllTranslators?: boolean,
				checkSetTranslator?: boolean
			): Promise<Translator[]>

			translate(
				libraryID?: number | false,
				saveAttachments?: boolean,
				linkFiles?: boolean
			): Promise<Item[]>

			setDocument(doc: Document): void
			setString(s: string): void
			setItems(items: Zotero.Item[]): void
			setSearch(item: Zotero.Item): void
		}

		// common
		function getOption<T = any>(option: string): T
		function getHiddenPref<T = any>(pref: string): T

		function loadTranslator(translatorType: 'web'): Translate<WebTranslator>
		function loadTranslator(
			translatorType: 'import'
		): Translate<ImportTranslator>
		function loadTranslator(
			translatorType: 'export'
		): Translate<ExportTranslator>
		function loadTranslator(
			translatorType: 'search'
		): Translate<SearchTranslator>

		function done(returnValue: string | false): void
		function debug(str: string, level?: 1 | 2 | 3 | 4 | 5): void
		function read<T = any>(length?: number): T
		function getXML<T = any>(): T

		const isBookmarklet: boolean
		const isConnector: boolean
		const isServer: boolean
		const parentTranslator: string | undefined

		//#region Web

		function selectItems(
			items: Record<string, string>
		): Promise<Record<string, string> | undefined>
		function selectItems(
			items: Record<string, string>,
			callback: (items: Record<string, string> | undefined) => void
		): void
		function monitorDOMChanges(target: Node, config: MutationObserverInit): void

		//#endregion

		// import & export
		function setProgress(value: number): void

		// export
		function nextItem(): Item | undefined
		function nextCollection(): Collection | undefined
	}

	// import Z = Zotero
	// import ZU = Zotero.Utilities

	function attr(
		node: ParentNode,
		selector: string,
		attr: string,
		index?: number
	): string
	function attr(selector: string, attr: string, index?: number): string

	function text(node: ParentNode, selector: string, index?: number): string
	function text(selector: string, index?: number): string

	function innerText(node: ParentNode, selector: string, index?: number): string
	function innerText(selector: string, index?: number): string

	// declare var request = ZU.request
	// declare var requestText = ZU.requestText
	// declare var requestJSON = ZU.requestJSON
	// declare var requestDocument = ZU.requestDocument
}
