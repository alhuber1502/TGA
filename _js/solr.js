// TGA
// SOLR

var SOLR_TGA;
if ( /thomasgray\.org/.test(window.location.href) ) {
  SOLR_TGA = "https://data.prisms.digital/solr/tga/select";
} else {
  SOLR_TGA = "http://192.168.1.2:8983/solr/tga/select";  
}

// clear-text replacements
var repl = {};
repl[ "text:" ] = "full-text";
repl[ "default:" ] = "default fields";
repl[ "author:" ] = "author";

repl[ "author_str" ] = "Authors";
repl[ "addressee_str" ] = "Addressees";
repl[ "languages" ] = "Languages";
repl[ "origin_str" ] = "Author Locations";
repl[ "destination_str" ] = "Addressee Locations";
repl[ "mentioned_str" ] = "Mentioned Entities";
repl[ "holding_str" ] = "Holding Institutions";

repl[ "topic_str" ] = "Topics";

repl[ "type" ] = "Types";
repl[ "contributor_str" ] = "Contributors";
repl[ "rhyme_str" ] = "Rhyme Patterns";
repl[ "met_str" ] = "Metrical Patterns";
repl[ "syllab_str" ] = "Syllable Patterns";
repl[ "subject_str" ] = "Subjects";
repl[ "form_str" ] = "Poetic Forms";

repl[ "eng" ] = "English";
repl[ "fre" ] = "French";
repl[ "fra" ] = "French";
repl[ "ita" ] = "Italian";
repl[ "lat" ] = "Latin";
repl[ "deu" ] = "German";
repl[ "grc" ] = "Greek";
repl[ "por" ] = "Portuguese";
repl[ "cym" ] = "Welsh";
repl[ "dan" ] = "Danish";
repl[ "pol" ] = "Polish";
repl[ "spa" ] = "Spanish";
repl[ "swe" ] = "Swedish";
repl[ "rus" ] = "Russian";

// format facet fields and ranges
function format_filters( filters, base ) {
  output = '';
  output += `<!--<div class="filter" id="date_range"><a class="btn btn-default" role="button" data-toggle="collapse" href="#collapse-date_range" aria-expanded="true" aria-controls="collapse-date_range">Date Range</a>
  <div class="collapse show" id="collapse-date_range">
  <div class="row" style="max-width:calc(100% - 0px);margin-left:0px;">
  <div class="col">
    <input type="text" class="form-control" placeholder="YYYY-MM-DD" id="start-date" aria-label="Start date" value='`+jq("#start-date").val()+`'>
  </div><div class="col" style="max-width:15px !important;align-self:center; padding:0;margin:0">—</div><div class="col">
    <input type="text" class="form-control" placeholder="YYYY-MM-DD" id="end-date" aria-label="End date" value='`+jq("#end-date").val()+`'>
  </div>
  <div class="col" style="max-width:125px;">
  <button class="btn date_range" data-base='`+base+`' type="submit" style="border-right: 1px solid #ccc; background-color:#88291a; color:#fff !important;">Update</button>
  </div>
  </div>
  </div>
  </div>-->`;
  for (key in filters.facet_fields) {
    output += `<div class="filter" id="`+key+`"><a class="btn btn-default" role="button" data-toggle="collapse" href="#collapse-`+key+`" aria-expanded="true" aria-controls="collapse-`+key+`">`+repl[ key ]+`</a><div class="collapse in" id="collapse-`+key+`"><ul class="listBibl" style="padding-left:0;">`;
    for ( var i=0; i<filters.facet_fields[ key ].length-1; i+=2 ) {
      if ( filters.facet_fields[key][i+1] > 0 ) {
        var thisfq = `fq=`+key+`:"`+filters.facet_fields[key][i]+`"`;
        var re = new RegExp( thisfq.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace( /\?/g, "\\?").replace( /\(/g, "\\(").replace( /\)/g, "\\)").replace( /\*/g, "\\*").replace( /\+/g, "\\+"),"g" );
        var reout = '';
        if ( base.search( re ) != -1 ) {
          reout = `<span class="facet_delete"><a class="del_facet" href='`+thisfq.replace(/'/g, '%27').replace( /\+/g, "%2B")+`' data-base='`+base.replace(/'/g, '%27').replace( /\+/g, "%2B")+`&rows=`+per_page+`'>&times;</a> </span>`;
        }
        output += `<li>`+reout+`<span class="facet_label">`+((reout == '')?`<a class="add_facet" href='`+base.replace(/'/g, "%27").replace( /\+/g, "%2B")+`&rows=`+per_page+`&start=0&fq=`+key+`:&quot;`+filters.facet_fields[key][i].replace(/'/g, "%27").replace( /\+/g, "%2B")+`&quot;'>`:``)+(repl[ filters.facet_fields[key][i] ]?repl[ filters.facet_fields[key][i] ]:filters.facet_fields[key][i])+((reout == '')?`</a>`:``)+`</span> <span class="facet_count">`+filters.facet_fields[key][i+1].toLocaleString()+`</span></li>`;
      }
    }
    output += `</ul></div></div>`;
  }
  /*
  for (key in filters.facet_ranges) {
    output += `<div class="filter" id="`+key+`"><a class="btn btn-default" role="button" data-toggle="collapse" href="#collapse-`+key+`" aria-expanded="true" aria-controls="collapse-`+key+`">`+repl[ key ]+`</a><div class="collapse in" id="collapse-`+key+`"><ul class="listBibl" style="padding-left:0;">`;
    for ( var i=0; i<filters.facet_ranges[ key ].counts.length-1; i+=2 ) {
      if ( filters.facet_ranges[key].counts[i+1] > 0 ) {
        var thisfq = `fq=`+key+`:[`+filters.facet_ranges[key].counts[i]+` TO `+(parseInt(filters.facet_ranges[key].counts[i])+100-1)+`]`;
        var re = new RegExp( thisfq.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace( /\?/g, "\\?").replace( /\(/g, "\\(").replace( /\)/g, "\\)"),"g" );
        var reout = '';
        if ( base.search( re ) != -1 ) {
          reout = `<span class="facet_delete"><a class="del_facet" href='`+thisfq.replace(/'/g, '%27')+`' data-base='`+base.replace(/'/g, '%27')+`&rows=`+per_page+`'>&times;</a> </span>`;
        }
        output += `<li>`+reout+`<span class="facet_label">`+((reout == '')?`<a href='`+base.replace(/'/g, '%27')+`&rows=`+per_page+`&start=0&fq=`+key+`:[`+filters.facet_ranges[key].counts[i]+` TO `+(parseInt(filters.facet_ranges[key].counts[i])+100-1)+`]'>`:``)+repl[ filters.facet_ranges[key].counts[i] ]+((reout == '')?`</a>`:``)+`</span> <span class="facet_count"> `+filters.facet_ranges[key].counts[i+1].toLocaleString()+`</span></li>`;
      }
    }
    output += `</ul></div></div>`;
  }
  */
  return output;
}

// format results section
async function format_results( docs, base, highlights ) {
    var output = `<ol start="`+parseInt(docs.start+1)+`">`;
    for (var j = 0; j < docs.docs.length; j++ ) {
      var v = docs.docs[ j ];
      output += `<li>`;
      // Letters
      if ( v.genre == "letter") { 
        output += `<div style="font-size:1.3rem;">[`+String(v.date_daterange).split( " TO " )[0].split('T')[0].substr(1)+(String(v.date_daterange).split( " TO " )[1] && String(v.date_daterange).split( " TO " )[1].split('T')[0] != String(v.date_daterange).split( " TO " )[0].split('T')[0].substr(1) ?' / '+String(v.date_daterange).split( " TO " )[1].split('T')[0]:'')+`]</div>`;
      }
      output += `<div style="display:table-cell;" class="item-desc">`;
      //var unique_document_title = v.author+" to "+v.addressee+", "+v.date_human;
      var unique_document_title = v.document_title;
      var link_url = '';
      if (base.search(/genre:letter/g) != -1) { 
        link_url = `/texts/letters/`+v.document_id;
      } else if (base.search(/genre:poem/g) != -1) { 
        if ( v.type == 'original' ) {
          link_url = `/texts/poems/`+v.id.slice(v.id.length - 4);
        } else {
          link_url = `/texts/poems/elegy/translations.shtml?texts=tgaen-welcc:`+v.id+`:`;
        }
      } else if (base.search(/genre:prose/g) != -1) { 
        link_url = v.document_url;
      }
      output += `<a href="`+link_url+`"><h3>`+truncateString(unique_document_title,400)+`</h3></a>`;
      if ( v.author ) {
        output += `<div><span>`+((v.author.length > 1)?`Authors`:`Author`)+`:</span> `;
        var vautlen = v.author.length;
        jq.each( v.author, function(i,v) {
          output += v;
          /*`<a class="aut_link" data-aut="`+v+`" href='&facet.field=author_str&facet.field=languages&facet.field=subjects_str&facet.field=collection_id_str&facet.range=PRISMS_dates&f.PRISMS_dates.facet.range.start=1301&f.PRISMS_dates.facet.range.end=2100&f.PRISMS_dates.facet.range.gap=100&facet=on&q.op=AND&q=default:&quot;`+v+`&quot;'>`+v+`</a>`;*/
          if ( i != (vautlen - 1) ) { output += ", "; }
        });
        if (v.origin) {
          output += "; <span>Location:</span> "+v.origin;
        }
        output +=  `</div>`;
      }
      if ( v.addressee ) {
        output += `<div><span>`+((v.addressee.length > 1)?`Addressees`:`Addressee`)+`:</span> `;
        var vaddlen = v.addressee.length;
        jq.each( v.addressee, function(i,v) {
          output += v;
          /*`<a class="aut_link" data-aut="`+v+`" href='&facet.field=author_str&facet.field=languages&facet.field=subjects_str&facet.field=collection_id_str&facet.range=PRISMS_dates&f.PRISMS_dates.facet.range.start=1301&f.PRISMS_dates.facet.range.end=2100&f.PRISMS_dates.facet.range.gap=100&facet=on&q.op=AND&q=default:&quot;`+v+`&quot;'>`+v+`</a>`;*/
          if ( i != (vaddlen - 1) ) { output += ", "; }
        });
        if (v.destination) {
          output += "; <span>Location:</span> "+v.destination;
        }
        output +=  `</div>`;
      }
      if ( v.contributor ) {
        output += `<div><span>Contributor:</span> `;
        var vconlen = v.contributor.length;
        jq.each( v.contributor, function(i,v) {
          output += v;
          /*`<a class="aut_link" data-aut="`+v+`" href='&facet.field=author_str&facet.field=languages&facet.field=subjects_str&facet.field=collection_id_str&facet.range=PRISMS_dates&f.PRISMS_dates.facet.range.start=1301&f.PRISMS_dates.facet.range.end=2100&f.PRISMS_dates.facet.range.gap=100&facet=on&q.op=AND&q=default:&quot;`+v+`&quot;'>`+v+`</a>`;*/
          if ( i != (vconlen - 1) ) { output += ", "; }
        });
        output +=  `</div>`;
      }
      /*
      if ( !(v.origin_place || v.origin_date) && (v.publication_place || v.publication_date) ) {
        output += `<div><span>Publication:</span> ` + ((v.publication_place)?v.publication_place.join( "; " ):``) + ((v.publication_date)?((v.publication_place)?`, `+v.publication_date:v.publication_date):``) +`</div>`;
      } else if ( v.origin_place || v.origin_date ) {
        var this_date;
        if ( v.origin_date ) {
          this_date = v.origin_date;
        } else if ( v.PRISMS_dates ) {
          this_date = v.PRISMS_dates;
        } else {
          this_date = undefined;
        }
        output += `<div><span>Origin:</span> ` + ((v.origin_place)?v.origin_place+`, `:``) + (((v.collection_id == "taylor" && String(v.origin_date).endsWith( "01" ))?String(v.origin_date).substring(0,2)+`00s`:(this_date)?this_date:`` )) +`</div>`;
      }
      */
      if (v.languages) {
        var lanlen = v.languages.length;
        output += `<div><span>Language:</span> `;
        jq.each( v.languages, function(i,v) { 
          output += repl[ v ];
          if (i === lanlen - 1) {}
          else { output += ", "; }
        });
        output += `</div>`;
      }
      if (v.topic) {
        var toplen = v.topic.length;
        output += `<div><span>Topics:</span> `;
        jq.each( v.topic, function(i,v) { 
          output += v;
          if (i === toplen - 1) {}
          else { output += ", "; }
        });
        output += `</div>`;
      }
      if (v.subject) {
        var sublen = v.subject.length;
        output += `<div><span>Subjects:</span> `;
        jq.each( v.subject, function(i,v) { 
          output += v;
          if (i === sublen - 1) {}
          else { output += ", "; }
        });
        output += `</div>`;
      }
      if (v.form) {
        var forlen = v.form.length;
        output += `<div><span>Poetic Form:</span> `;
        jq.each( v.form, function(i,v) { 
          output += v;
          if (i === forlen - 1) {}
          else { output += ", "; }
        });
        output += `</div>`;
      }
      /*
      output += `<div><span>Collection:</span> `+ repl[ v.collection_id ] +`</div>`;
      */
      if ( highlights && highlights[ v.id ].text && highlights[ v.id ].text.length > 0 ) {
        output += `<div class="snippets"><span>Text passages (max. 10):</span><ul class="listBibl"> `;
        jq.each( highlights[ v.id ].text, function( i,v ) {
          output += `<li>. . .`+v.replace(/(?:\r\n|\r|\n)/g, '<br>')+`. . .</li>`;
        });
        output += `</ul></div>`;
      };
/*
      output += `<div class="item-tools">
      <ul>
        <li><a href="#`+v.document_id+`" class="details_object"><i class="fas fa-info-circle"></i> Details<span /></a></li>`;
        output += (($("#cy").length == 0)?`<li><a href="#`+v.document_id+`" title="View a graph representation of this edition" data-title="`+truncateString(unique_document_title,400)+`" class="graph_object"><i class="fas fa-project-diagram"></i> Graph preview<span /></a> </li>`:``);
      output += `
      </ul>
      </div>`;
*/
      output += `</div></li>`;
    }
  output += `</ol>`;
  return output;
}

// produce results page
async function makeResults( result ) {
  var result_header = result.responseHeader;
  var result_body = result.response;
  var facets = result.facet_counts;
  var highlights = result.highlighting;
  // format query base
  var base = '';
  for ( key in result_header.params ) {
    if ( result_header.params[ key ] instanceof Array ) {
      for( i in result_header.params[ key ] ) {
        base += `&`+key+`=`+result_header.params[ key ][i];  
      }
    } else {
      base += `&`+key+`=`+result_header.params[ key ];
    }
  }
  per_page = result_header.params["rows"] || 25;
  base = base.replace(/(&rows=\d+)/i, '');
  switch ( result_header.params["sort"] ) {
      case "score desc":
        sorting = "relevance";
        break;
      case "date_dts asc":
        sorting = "date ascending";
        break;
      case "date_dts desc":
        sorting = "date descending";
        break;
      case "document_title_str asc":
      case "type_str asc,document_title_str asc":
        sorting = "title";
        break;
  }
  base = base.replace(/&sort=.*?&/i, '&');
  // format results/filters
  jq( "#per_page" ).html( `
    <!-- Single button -->
    <div class="btn-group" id="per_page_btn">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      style="text-align: left;">
        `+per_page+` per page <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" style="padding-left:15px;">
        <li><a href='`+base+`&sort=`+result_header.params["sort"]+`&rows=10'>10</a></li>
        <li><a href='`+base+`&sort=`+result_header.params["sort"]+`&rows=25'>25</a></li>
        <li><a href='`+base+`&sort=`+result_header.params["sort"]+`&rows=50'>50</a></li>
        <li><a href='`+base+`&sort=`+result_header.params["sort"]+`&rows=100'>100</a></li>
      </ul>
    </div>
  `);
  jq( "#sorting" ).html( `
    <!-- Single button -->
    <div class="btn-group" id="sorting_btn">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort by `+sorting+` <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" style="text-align:right; padding-right:30px; width:100%;">
        <li><a href='`+base+`&rows=`+per_page+`&sort=score desc'>relevance</a></li>
        <li><a href='`+base+`&rows=`+per_page+`&sort=date_dts asc'>date ascending</a></li>
        <li><a href='`+base+`&rows=`+per_page+`&sort=date_dts desc'>date descending</a></li>
        <li><a href='`+base+`&rows=`+per_page+`&sort=document_title_str asc'>title</a></li>
      </ul>
    </div>
  `);
  if ( result_body.numFound > -1 ) {
    jq( "#results_main" ).html( await format_results( result_body, base, highlights ) );
    if ( facets) { jq( "#filters_main" ).html( format_filters( facets, base ) ); }
    jq( "#spinner" ).remove();
    jq('html, body, .modal-body').scrollTop(0,0);
    var tp;
    if ( result_body.numFound > per_page ) {
      if ( result_body.numFound % per_page > 0 ) {
        tp = parseInt(result_body.numFound/per_page)+1;
      } else {
        tp = result_body.numFound/per_page;
      }
    } else {
      tp = 1;
      startPage = 1;
    }
    if ( result_body.start == 0 ) {
      startPage = 1;
    }
    if ( jq('#results .sync-pagination').data("twbs-pagination") ) {
      jq('#results .sync-pagination').twbsPagination('destroy');
    }
    jq('#results .sync-pagination').twbsPagination({
      totalPages: tp,
      visiblePages: 3,
      startPage: startPage,
      first: '&laquo;',
      prev: '&lsaquo;',
      next: '&rsaquo;',
      last: '&raquo;',
      pageClass: 'page-item',
      onPageClick: async function (evt, page) {
        startPage = page;
        base = base.replace(/(&start=\d+)/i, '');
        await makeQuery( base+"&start="+(page-1)*per_page+"&rows="+per_page+`&sort=`+result_header.params["sort"] );
      }
    });
  } else {
    // offer search bar
    jq( "#spinner" ).remove();
  }
  jq('html, body, .modal-body').scrollTop(0,0);
}

// submit a SOLR query
function makeQuery( query ) {
  return new Promise(function(resolve, reject) {
    if ( query.search( /&sort=/ ) == -1 ) {
      if (query.search(/genre:letter/g) != -1) {
        query += '&sort=date_dts asc';
      } else if (query.search(/genre:poem/g) != -1) {
        query += '&sort=type_str asc,document_title_str asc';
      } else if (query.search(/genre:prose/g) != -1) {
        query += '&sort=document_title_str asc';
      }
    }
    if (query.search(/genre:letter/g) != -1) {
      $( "#search_genre" ).html( "Letters" );
    } else if (query.search(/genre:poem/g) != -1) {
      $( "#search_genre" ).html( "Poems" );
    } else if (query.search(/genre:prose/g) != -1) {
      $( "#search_genre" ).html( "Prose Works" );
    }
    backup_query = query;
    jq( "#main,#tabCorpusSearch" ).append( "<div id='spinner'><img style='width:48px; height:48px;' src='/images/loader.gif'/></div>" );
    jq.ajax(
      SOLR_TGA+"?"+query
    ).done(function( result ) {
      makeResults( result );
      jq( "#results_header h2" ).html( result.response.numFound.toLocaleString()+" results" );
    }).fail(function( error ) {
      jq( "#spinner" ).remove();
      jq( "#results_header h2" ).html( "0 results" );
      jq( "#results_main" ).html( `<p style="margin:10px 0 15px 0;"><em>Please note:</em> There was a problem parsing your query.</p>` );
      console.log( error );
    });
  })
}

var startPage = 1, per_page = 25, sorting = 'date ascending', backup_query = '';
// format query and submit
jq( document ).on( 'submit', '#advsearch,#simsearch,#newSearch .simple_search', function(e) {
  e.preventDefault();
  var _this = this;
  var qvalues = [];
  var array = jq( this ).serializeArray();
  var data = getFormData( jq( this ) );
  var op = array.shift().value; // q.op
  // transform simple to advanced search
  if ( data.search_field ) {
    var search = { };
    search = { name: "text", value: data.q };
    array.length = 0;
    array.push( search );
  }
  jq.each( array, function(i, field) {
    if ( field.value != '' ) {
      var tvalues = [];
      var regex = /[\(+-]?"[^"]+"[\)]?|[^\s]+/g; // preserve phrases
      terms = field.value.match(regex).map(e => e.replace(/"(.+)"/, "$1"));
      jq.each( terms, function (i,v) {
        if ( v == "AND" || v == "OR" || v == "NOT" || v == "(" || v == ")" ) {
          tvalues.push( v );
        } else {
          var res = '';
          if ( v.substring(0,1) == "(" ) {
            tvalues.push( v.slice( 0,1 ) );
            v = v.slice( 1 );
          }
          if ( v.substring(v.length-1) == ")" ) {
            res = v.slice( -1 );
            v = v.slice( 0,-1 );
          }
//          if ( field.name == "date_daterange" && field.value.match( /[-–]/ ) && field.value.split( /[-–]/ ).length == 2 && field.value.split( /[-–]/ )[0] != '' ) {
          if ( field.name == "date_daterange" && field.value.match( /\// ) && field.value.split( /\// ).length == 2 && field.value.split( /\// )[0] != '' ) {
            tvalues.push( field.name+":["+(field.value.split( /[\/]/ )[0] != ''?field.value.split( /[\/]/ )[0]:'*') + " TO " +(field.value.split( /[\/]/ )[1] != ''?field.value.split( /[\/]/ )[1]:'*') + "]" );
          } else if ( v.substring(0,1) == "+" || v.substring(0,1) == "-") {
            if ( field.name == "date_daterange" || field.name == "document_id" ) {
              tvalues.push( v.substring(0,1)+field.name+":"+((/\s/.test( v.substring(1)))?`"`+v.substring(1).replace(/\&/g,"\\\\&")+`"`:v.substring(1).replace(/\&/g,"\\\\&")) );
            } else {
              tvalues.push( v.substring(0,1)+field.name+":"+((/\s/.test( v.substring(1)))?`"`+v.substring(1).replace(/\&/g,"\\\\&")+`"`:v.substring(1).replace(/\&/g,"\\\\&"))
                +((jq("input[name='fuzzy']:checked")[0])?`~1`:``)
              );
            }
          } else {
            if ( field.name == "date_daterange" || field.name == "document_id" ) {
              tvalues.push( field.name+":"+((/\s/.test( v ))?`"`+v.replace(/\&/g,"\\\\&")+`"`:v.replace(/\&/g,"\\\\&")) );
            } else {
              tvalues.push( field.name+":"+((/\s/.test( v ))?`"`+v.replace(/\&/g,"\\\\&")+`"`:v.replace(/\&/g,"\\\\&")) 
                +((jq("input[name='fuzzy']:checked")[0])?`~1`:``)
              );
            }
          }
          if ( res != '' ) {
            tvalues.push( res);
          }
        }
      });
      qvalues.push( tvalues.join( " " ) );
    }
  });
  var qs = "/search/results.shtml?q.op="+op+"&q="+qvalues.join( " " );
  //if ( qs != "/search/results.shtml?q.op="+op+"&q=" ) {
    if ( jq( _this ).attr( "id" ) == "advsearch" || window.location.pathname != '/search/results.shtml' ) {
      if ( qs == "/search/results.shtml?q.op="+op+"&q=" ) {
        qs += "*:*&rows="+per_page+"&fq="+data.search_field;
      } else{
        qs += "&rows="+per_page+"&fq="+data.search_field;
      }
      document.location = qs;
    } else {
      if ( qs == "/search/results.shtml?q.op="+op+"&q=" ) {
        qs += "*:*&rows="+per_page+"&fq="+data.search_field;
        document.location = qs;
      } else {
        // SEARCH
        console.log( "SEARCH!" );
        if ( data.search_field == 'genre:letter' ) {
          makeQuery( `facet.field=languages&facet.field=author_str&facet.field=addressee_str&facet.field=origin_str&facet.field=destination_str&facet.field=mentioned_str&facet.field=holding_str&facet.missing=false&facet=on&q.op=`+op+`&q=`+qvalues.join( " " )+`&sort=score desc&hl=on&hl.fl=text&hl.snippets=10&hl.encoder=html&hl.simple.pre=<span>&hl.simple.post=</span>&hl.requireFieldMatch=true&rows=`+per_page
        + "&fq="+data.search_field); 
        } else if ( data.search_field == 'genre:poem' ) {
          makeQuery( `facet.field=type&facet.field=languages&facet.field=contributor_str&facet.field=rhyme_str&facet.field=syllab_str&facet.field=met_str&facet.field=subject_str&facet.field=form_str&facet.missing=false&facet=on&q.op=`+op+`&q=`+qvalues.join( " " )+`&sort=score desc&hl=on&hl.fl=text&hl.snippets=10&hl.fragsize=50&hl.encoder=html&hl.simple.pre=<span>&hl.simple.post=</span>&hl.requireFieldMatch=true&rows=`+per_page
          + "&fq="+data.search_field); 
        } else if ( data.search_field == 'genre:prose' ) {
          makeQuery( `facet.field=languages&facet.field=topic_str&facet.missing=false&facet=on&q.op=`+op+`&q=`+qvalues.join( " " )+`&sort=score desc&hl=on&hl.fl=text&hl.snippets=10&hl.encoder=html&hl.simple.pre=<span>&hl.simple.post=</span>&hl.requireFieldMatch=true&rows=`+per_page
          + "&fq="+data.search_field); 
        }
      }
    }
  /*
  } else {
    // display alert on advanced search otherwise ignore submit
    if ( !jq( "#advsearch .alert" ).length ) {
      jq( "#advsearch" ).prepend( `
        <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>No search terms!</strong> Please enter a search query to continue. 
        </div>`);
    }
  }
  */ 
});
/*
// handle date range filter
$( document ).on( 'click', '#filters_main button.date_range', async function(e) {
  e.preventDefault();
  var re = new RegExp( base.replace(/(AND? date_daterange:\[.*? TO .*?\])/i, 'AND date_daterange:['+($("#start-date").val() != ''?$("#start-date").val():'*')+' TO '+($("#end-date").val() != ''?$("#end-date").val():'*')+']'),"g" );
  if ( base.search( re ) != -1 ) {
    if ( $("#start-date").val() != '' || $("#end-date").val() != '' ) {
      console.log( $(e.currentTarget).data('base') );
      await makeQuery( $(e.currentTarget).data('base').replace(/(AND? date_daterange:\[.*? TO .*?\])/i, 'AND date_daterange:['+($("#start-date").val() != ''?$("#start-date").val():'*')+' TO '+($("#end-date").val() != ''?$("#end-date").val():'*')+']') );
    } else {
      console.log( $(e.currentTarget).data('base') );
      await makeQuery( $(e.currentTarget).data('base').replace(/(AND? date_daterange:\[.*? TO .*?\])/i, '') );
    }
  } else {
    console.log( $(e.currentTarget).data('base') );
    await makeQuery( $(e.currentTarget).data('base').replace(/(q=.*?)&/(AND? date_daterange:\[.*? TO .*?\])/i, '') );
  }
});
*/
// handle filters, results per page and sorting-btn
jq( document ).on( 'click', '#filters_main a.add_facet, #per_page_btn .dropdown-menu a, #sorting_btn .dropdown-menu a', async function(e) {
  e.preventDefault();
  await makeQuery( jq(e.currentTarget).attr('href').replace(/(&start=\d+)/i, '') );
});

// handle removing filters
jq( document ).on( 'click', '#filters_main a.del_facet', async function(e) {
  e.preventDefault();
  var re = jq(e.currentTarget).attr('href');
  await makeQuery( jq(e.currentTarget).data('base').replace( re, '') );
});

// truncate a string                             
function truncateString(str, num) {
  if ( str ) {
      if (str.length <= num) {
              return str;
          }
          return str.slice(0, num) + '...';
  } else return '';
}

// serialize form data to object
function getFormData($form){
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};
  jq.map(unindexed_array, function(n, i){
      indexed_array[n['name']] = n['value'];
  });
  return indexed_array;
}
