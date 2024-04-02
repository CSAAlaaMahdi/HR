<div class="footerinfo">
    @switch($Bond[0]['Vou_Type'])
        @case(1)
            <div id="footercontent1" class="footercontent">
                <span>امين الصندوق </span><br>

            </div>
            <div id="footercontent2" class="footercontent">
                <span>المحاسب </span><br>

            </div>
            <div id="footercontent3" class="footercontent">
                <span> المدير المفوض</span><br>

            </div>
        @break

        @case(2)
            <div id="footercontent1" class="footercontent">
                <div style="width: 100%;background-color:red">
                    <span style="margin-left:15px;float: right;">المستلم  </span>
                    <span style="margin-right:50px;float: left;">امين الصندوق  </span>
                </div>


            </div>
            <div id="footercontent2" class="footercontent">
                <span>المحاسب </span><br>

            </div>
            <div id="footercontent3" class="footercontent">
                <span> المدير المفوض</span><br>

            </div>
        @break

        @default
    @endswitch

</div>
